import kcalToGramm from "./kcalToGramm"

export default function getFoodMass(foodName, kcalToday) {
    if (!foodName || !kcalToday) {
        return undefined
    }
    let result = Math.round(globalThis.formData.people * kcalToday / kcalToGramm(foodName) * 100)
    if (result) {
        return result
    } else {
        return undefined
    }
}