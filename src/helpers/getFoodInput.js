import { getInputs } from "@/components/inputs/inputs";

const $dialog = $("#food-dialog");
const dialog = $dialog[0];
const $dialogForm = $dialog.find("form");
const $dialogInputs = $dialogForm.find("input");

export default async function getFoodInput(food) {
    return new Promise((resolve, reject) => {
        dialog.show();
        $dialogInputs.each(function(index, input) {
            if (food) {
                input.value = food[input.name]
            }
        })

        $dialogForm.off('submit').on('submit', function (event) {
            event.preventDefault()
            dialog.close(JSON.stringify(getInputs($dialogForm[0])))
        })
        $dialog.off('close').on('close', function(event) {
            const returnValue = dialog.returnValue
            
            if (returnValue === 'cancel' || returnValue === ''){
                reject(new Error('USER_CANCELLED'));
            } else {
                resolve(JSON.parse(returnValue))
            }
            dialog.returnValue = ''
        })
        $dialog.off('cancel').on('cancel', function(event) {
            dialog.returnValue = 'cancel'
        })
        $dialogForm.find("#cancel-dialog").off('click').on('click', function (event) {
            $dialog.trigger('cancel')
        })
    });
}
