import setFoodMass from "./setFoodMass"

export default function setFoodName($el, name) {
    if (!name) {
        var foodName = $el.data('foodName')
    } else {
        var foodName = name
        $el.data('foodName', name)
    }
    let foodMass = $el.data('foodMass')
    setFoodMass($el)
}