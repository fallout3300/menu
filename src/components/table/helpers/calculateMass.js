import formatFood from "@/helpers/formatFood";
import getFoodMass from "@/helpers/getFoodMass";
import updateText from "./updateText";

export default function calculateMass($el) {
    const { foodList, kcalToday } = $el.data()

    let isMassFound = true

    foodList.forEach((food, index, arr) => {
        food.foodMass = Math.round(getFoodMass(food.foodName, kcalToday) * (food.foodProportion / 100))
        food.foodText = formatFood(food.foodName, food.foodMass)
        if (!food.foodMass) {
            isMassFound = false
        }
    });

    $el.removeAttr('data-handchanged')

    $el[0].dataset.isMassFound = isMassFound

    $el.data('foodList', foodList)
    updateText($el)
}