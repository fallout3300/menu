import { $inputArray } from "../consts"
import { $form } from "@/components/form/consts"

export default function setInputs(data, form = $form[0]) {
    $inputArray.each((index, input) => {
        const name = $(input).attr('name')
        const value = data[name]
        if (value) {
            input.value = value
        }
    })
}