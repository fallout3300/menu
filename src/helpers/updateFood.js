import setKcalToday from "@/components/table/helpers/setKcalToday";
import Cell from "@/entity/Cell/Cell";

export default function updateFood(row, kcalToday, $tElement) {
    let arrayName;
    switch (row - 1) {
        case 0:
            arrayName = 'breakfasts'
            break;
        case 1:
            arrayName = 'snack1'
            break;
        case 2:
            arrayName = 'snack2'
            break;
        case 3:
            arrayName = 'dinners'
            break
        default:
            arrayName = 'breakfasts'
            break;
    }
    
    let { lastIndex, length } = formData[arrayName]

    if (lastIndex >= length - 1) {
        formData[arrayName].lastIndex = 0
    } else {
        formData[arrayName].lastIndex++
    }
    lastIndex = formData[arrayName].lastIndex

    const foodListForToday = globalThis.formData[arrayName][lastIndex]
    
    $tElement.data('foodList', foodListForToday)
    setKcalToday($tElement, kcalToday)
}



