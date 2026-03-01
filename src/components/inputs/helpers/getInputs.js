import { $form } from "@/components/form/consts"

export default function getInputs(form = $form[0]) {
    return Object.fromEntries(new URLSearchParams($(form).serialize()))
}