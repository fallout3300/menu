import addRowTo from "@/helpers/addRowTo"
import clearTable from "./clearTable"
import addContenteditableListeners from "./addContentEditableListeners"
import updateFood from "@/helpers/updateFood"
import { $table } from "../consts"
import setKcalToday from "./setKcalToday"

export default function calculateTable() {
    clearTable($table)

    for (let day = 1; day < globalThis.formData.days + 1; day++) {
        addRowTo($table, ['th', 'td', 'td', 'td', 'td'], ($el, row, tElements) => {
            if (row === 0) {
                $el.append(day)
            }
            else {
                const kcalToday = globalThis.formData.kcalForOne[row - 1][day - 1]
                updateFood(row, kcalToday, $el)
            }
        })
    }

    addContenteditableListeners()
}