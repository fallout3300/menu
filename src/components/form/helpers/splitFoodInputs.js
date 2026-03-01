import splitAndTrim from "@/helpers/splitAndTrim";

export default function splitFoodInput(arrayName) {
    let result = globalThis.formData[arrayName];

    
    result = splitAndTrim(result, ";");
    result = result.map((el) => {
        return splitAndTrim(el, ",")
            .map((el) => {
                let [foodName, foodProportion] = splitAndTrim(el, "-");
                if (foodProportion) {
                    foodProportion = Number(foodProportion.split('%')[0])
                } else {
                    foodProportion = 100
                }
                return {foodName, foodProportion}
            })
            .filter((el) => {
                if (!el.foodName) {
                    return false
                }
                return true
            });
    })
    .filter(el => el.length !== 0)

    // result.forEach(el => {
    //     let notAutoProportions = []
    //     let autoProportionsIndexes = []
    //     el.forEach((food, index) => {
    //         if (food.foodProportion === 'auto') {
    //             autoProportionsIndexes.push(index)
    //         } else {
    //             notAutoProportions.push(food.foodProportion)
    //         }
    //     })

    // })
    
    result.lastIndex = 0
    
    globalThis.formData[arrayName] = result
}