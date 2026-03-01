import { $table } from '@/components/table/consts'
import { setInputs } from '@/components/inputs/inputs'
import { getFormData } from '@/components/form/form'

import addRowTo from '@/helpers/addRowTo'
import calculateMass, { rowAdder, totalTable } from '@/helpers/calculateMass'
import { addContenteditableListeners, clearTable } from '@/components/table/table'

// set data to table
export default function setData({inputsData, tableData, totalData}) {
    const tableBuffer = $table.children()[0]
    try {
        // debugger
        globalThis.table.paste(tableData)

        
        if (inputsData) {   
            setInputs(inputsData)
            getFormData()
        }
        if (totalData) {
            totalTable.clear()
            totalData.forEach(food => {
                totalTable.addRow(($cell, column) => {
                    return rowAdder($cell, column, {name: food[0], mass: food[1]})
                    // $cell.text(food[column])
                    // return $cell.text()
                })
            })
        } else {
            calculateMass()
        }
    } catch (error) {
        console.error(error)
        if (tableBuffer) {
            $table[0].appendChild(tableBuffer)
        }
        // throw new Error("Error, table is not insert");
        throw(error)
    }
}