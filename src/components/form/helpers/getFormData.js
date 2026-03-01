import { getInputs } from "@/components/inputs/inputs"
import calculateKcal from "@/helpers/calculateKcal"
import splitString from "@/helpers/splitString"
import splitFoodInput from "./splitFoodInputs"

export default function getFormData() {
    globalThis.formData = getInputs()

    globalThis.formData.days = Number(globalThis.formData.days)
    
    // splitString('breakfasts')
    // splitString('snack1')
    // splitString('snack2')
    // splitString('dinners')

    splitFoodInput('breakfasts')
    splitFoodInput('snack1')
    splitFoodInput('snack2')
    splitFoodInput('dinners')
    
    // let kcalForOne = onlySplitString(globalThis.formData.kcalForOne, '>').map(arr => onlySplitString(arr).map(e => Number(e)))
    // if (kcalForOne.length === 0) {
    //     kcalForOne = [[500, 500, 500, 500], [500, 500, 500, 500]]
    // }
    globalThis.formData.kcalForOne = calculateKcal()

    splitString('caloricity', ';')
    globalThis.formData.caloricity = globalThis.formData.caloricity.map((element) => {
            let splitten = element.split('-').map(i => i.trim()).filter(i => i.length > 0)
            if (splitten) {   
                return {name: splitten[0], kcal: splitten[1], mass: 0}
            }
    })
}
