import playAnimation from "@/helpers/playAnimation"

export default function updateText($el) {
    let res = ''
    $el.data('foodList').forEach((food, index, arr) => {
        res += food.foodText
        if (index + 1 !== arr.length) {
            res += ', '
        } else {
            // res += '.'
        }
    })
    $el.text(res)
    playAnimation($el, 'succsess') 
}