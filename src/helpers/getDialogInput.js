const $dialog = $("#input-dialog");
const dialog = $dialog[0];
const $dialogForm = $dialog.find("form");
const $dialogInput = $dialogForm.find("input");
const $dialogLabel = $dialogForm.find("label");

globalThis.closedCount = 0

export default async function getDialogInput(message = 'Введите данные', type = 'text', value = '') {
    return new Promise((resolve, reject) => {
        dialog.showModal();
        $dialogLabel
            .text(message)
            .attr('type', type)
        $dialogInput
            .val(value)
            .select()

        $dialogForm.off('submit').on('submit', function (event) {
            event.preventDefault()
            dialog.close($dialogInput.val())
        })
        $dialog.off('close').on('close', function(event) {
            globalThis.closedCount++
            const returnValue = dialog.returnValue

            if (returnValue === 'cancel' || returnValue === '' || returnValue == value){
                reject(new Error('USER_CANCELLED'));
            } else {
                resolve(returnValue)
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
