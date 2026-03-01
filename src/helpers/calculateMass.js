import { $table } from "@/components/table/consts"
import { clearTable } from "@/components/table/table"

import addRowTo from "./addRowTo"
import Table from "@/entity/Table/Table"
import moveCursorToEndOfLine from "./moveCursorToEndOfLine"

const $totalTable = $('#total-table')
export const $plusBtn = $('#plus-btn')
const $totalSend = $('#total-send')
export const totalTable = new Table($totalTable, ['th', 'td'])

$totalSend.click(function (event) {
    calculateMass()
})

export default function calculateMass() {
    function getAllFood() {
        let res = []
        table.rows.forEach(column => {
            column.forEach(cell => {
                cell.content.forEach(food => {
                    // res.push({name: food.name, mass: food.mass})
                    const foodIndex = res.findIndex(el => el.name === food.name)
                    if (foodIndex !== -1) {
                        res[foodIndex].mass += food.mass
                    } else {
                        res.push({ name: food.name, mass: food.mass })
                    }
                })
            })
        })
        return res.sort((a, b) => {
            return b.mass - a.mass
        })
    }

    console.log('calc')
    totalTable.clear()

    const allFood = getAllFood()
    // const food = formData.caloricity.find(el => el.name.toLowerCase() === name.toLowerCase())

    allFood.forEach((food, index) => {
        totalTable.addRow(($cell, column) => rowAdder($cell, column, food))
    })
    console.log(totalTable.rows)
}

export function rowAdder($cell, column, food) {
    $cell.data('x', column)
    $cell.data('y', totalTable.rows.length)

    $cell.off('click').on('click', (function (event) {
        $(this).attr('contenteditable', 'true')
        $(this)[0].focus()

        moveCursorToEndOfLine(this)
    }))
    $cell.off('blur').on('blur', (blur))
    $cell.off('keydown').on('keydown', (function (event) {
        if ((event.key === 'Enter') || event.key === 'Escape') {
            $(this).trigger('blur')
        }
    }))
    function blur(event) {
        $(this).removeAttr('contenteditable')
        $(this).addClass('handchanged')
        const {x, y} = $(this).data()
        totalTable.rows[y][x] = $(this).text()

        let allMass = 0

        // debugger

        totalTable.rows.forEach(food => allMass += +food[1])

        $('#finaly').text(allMass)
    }

    if (column === 0) {
        $cell.text(food.name)
    }
    else {
        $cell.text(food.mass)
    }
    return $cell.text()
}

$plusBtn.click(function (event) {
    totalTable.addRow(($cell, column) => rowAdder($cell, column, {name: '-', mass: '0'}))
})