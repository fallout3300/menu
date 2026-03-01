import formatFood from "@/helpers/formatFood"
import getFoodMass from "@/helpers/getFoodMass"
import setFoodMass from "@/helpers/setFoodMass"
import calculateMass from "./calculateMass"

export default function setKcalToday($el, kcalToday) {
    $el.data('kcalToday', kcalToday)
    calculateMass($el)
}