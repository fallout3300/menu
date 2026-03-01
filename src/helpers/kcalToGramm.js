export default function kcalToGramm(foodName) {
    const kcalIndex = globalThis.formData.caloricity.findIndex(food => food.name.toLowerCase() === foodName.toLowerCase())
    if (kcalIndex !== -1) {
        const food = globalThis.formData.caloricity[kcalIndex]
        return food.kcal
    } else {
        return undefined
    }
}