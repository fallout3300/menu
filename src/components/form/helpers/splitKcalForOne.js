import splitAndTrim from "@/helpers/splitAndTrim";

export default function splitKcalForOne() {
    return splitAndTrim(formData.kcalForOne, '>').map(side => splitAndTrim(side, ','))
}

// let kcalForOne = onlySplitString(globalThis.formData.kcalForOne, '>').map(arr => onlySplitString(arr).map(e => Number(e)))
// if (kcalForOne.length === 0) {
//     kcalForOne = [[500, 500, 500, 500], [500, 500, 500, 500]]
// }