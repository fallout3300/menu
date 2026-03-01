import moveCursorToEndOfLine from "@/helpers/moveCursorToEndOfLine"
import addRowTo from "@/helpers/addRowTo"
import Cell from "../Cell/Cell"
import Food from "../Food/Food"
import { $table } from "@/components/table/consts"
import { loadGist } from "@/components/api/gist/gist"
import { setData } from "@/components/loadData/loadData"
import playAnimation from "@/helpers/playAnimation"

class Row {
    cells = []

    forEach(callback) {
        this.cells.forEach(callback)
    }
    push(cell) {
        this.cells.push(cell)
    }
    at(index) {
        if (index === -1) {
            return this.cells[this.length]
        }
        return this.cells[index]
    }
    get() {
        return this.cells
    }
    set(cells) {
        this.cells = cells
    }
    get length() {
        return this.cells.length
    }
}

export default class Table {
    rows = []
    constructor($table, elTags = ['th', 'td', 'td', 'td', 'td']) {
        this.$table = $table
        this.elTags = elTags
    }

    addRow(callback) {
        this.rows.push(addRowTo(this.$table, this.elTags, callback))
    }

    paste(rows) {
        this.clear()
        rows.forEach((oldRow, rowIndex) => {
            const day = rowIndex + 1
            // row.cells.forEach(column => {
            //     console.log(column)
            // });
            const row = new Row
            addRowTo(this.$table, this.elTags, ($cell, column) => {
                if (column === 0) {
                    $cell.append(day)
                }
                else {
                    // const kcalToday = globalThis.formData.kcalForOne[column - 1][day - 1]
                    // const cell = new Cell($cell, kcalToday)
                    // $cell.data('x', column - 1)
                    // $cell.data('y', this.rows.length)
                    // cell.randomizeFood(column)
                    // row.push(cell)
                    const oldCell = oldRow.cells.at(column - 1)

                    // debugger

                    $cell.data('x', column - 1)
                    $cell.data('y', this.rows.length)   

                    const cell = new Cell($cell, oldCell.kcalToday)
                    cell.content = oldCell.content.map(oldFood => {
                        const food = new Food
                        for (const key in oldFood) {
                            if (Object.prototype.hasOwnProperty.call(oldFood, key)) {
                                const element = oldFood[key];
                                food[key] = element
                            }
                        }
                        food.$details = undefined
                        return food
                    })
                    
                    // debugger
                    
                    cell.updateHtmlContent()
                    row.push(cell)
                }
            })
            this.rows.push(row)
        });
    }

    calculate() {
        this.clear()
        for (let day = 1; day < formData.days + 1; day++) {
            const row = new Row
            addRowTo(this.$table, this.elTags, ($cell, column) => {
                if (column === 0) {
                    $cell.append(day)
                }
                else {
                    const kcalToday = globalThis.formData.kcalForOne[column - 1][day - 1]
                    const cell = new Cell($cell, kcalToday)
                    $cell.data('x', column - 1)
                    $cell.data('y', this.rows.length)
                    // cell.addElements([new Food('Греча', kcalToday), new Food('Рис', kcalToday)])
                    cell.randomizeFood(column)
                    row.push(cell)
                }
            })
            this.rows.push(row)
        }
    }

    update() {
        this.rows.forEach(column => {
            column.cells.forEach(cell => {
                cell.content.forEach(food => {
                    if (!food.isHandChanged) {
                        // debugger
                        food.calculateMass()
                    }
                })
            })
        })
    }

    clear() {
        this.rows = []
        this.$table.find('tr').first().siblings().remove()
    }

    addListeners() {
        this.$table.find('th, td').keydown(function(event) {
            if ((event.key === 'Enter' && event.ctrlKey) || event.key === 'Escape') {
                // Ctrl + Enter || Esc
                $(this).blur()
            }
        })
        this.$table.find('th, td').blur(function(event) {
            $(this).removeAttr('contenteditable')
            this.dataset.handchanged = 'true'
        })
        this.$table.find('th, td').dblclick(function(event) {
            $(this).attr('contenteditable', 'true')
            $(this)[0].focus()
    
            moveCursorToEndOfLine(this)
        })
    }
}