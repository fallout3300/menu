import splitKcalForOne from "@/components/form/helpers/splitKcalForOne"
import fromToList from "./fromToList"

export default function calculateKcal() {
    let [fromArr, toArr] = splitKcalForOne()
    
    // kcalForOne [[1, 2, 3, 4], [1, 2, 3, 4]]
    // const fromArr = kcalForOne[0]
    // const toArr = kcalForOne[1]
    // let res = {breakfast: [], snack: [], snack2: [], dinner: []}
    let res = [[], [], [], []]
    // console.log(kcalForOne)

    for (let i = 0; i < 4; i++) { 
        res[i] = fromToList(+fromArr[i], +toArr[i])
    }
    return res
}