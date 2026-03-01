import calculateMass from "./calculateMass";
import formatFood from "./formatFood"
import getFoodMass from "./getFoodMass"
import playAnimation from "./playAnimation";

export default function setFoodMass($el, foodName, mass) {
    let {foodList, kcalToday} = $el.data()
    // foodList[foodName]['foodMass'] = mass || getFoodMass(foodName, kcalToday)
    $el.data('foodList.foodMass', mass || getFoodMass(foodName, kcalToday))
    $el[0].dataset.foodMass = 'true'
    $el.data('foodText', formatFood(foodName, $el.data('foodList.foodMass')))
    $el.removeAttr('data-handchanged')

    console.log($el.data('foodList'))

    // if (nav === 'on-total-table') {
    //     calculateMass()
    // }
    
    playAnimation($el, 'succsess') 
}