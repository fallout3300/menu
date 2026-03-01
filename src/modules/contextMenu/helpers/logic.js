import setKcalToday from "@/components/table/helpers/setKcalToday";
import getDialogInput from "@/helpers/getDialogInput";
import setFoodMass from "@/helpers/setFoodMass";
import setFoodName from "@/helpers/setFoodName";

export default function(key, options) {
    // Логика обработки выбора пункта меню
    // console.log("Нажат пункт:",  key, options.$trigger.text());
    const $target = options.$trigger
    const target = $target[0]
    let value;
    
    switch (key) {
        case 'edit':
            $target.attr('contenteditable', 'true')
            $target[0].focus()
            break;
        case 'editKcalToday':
            getDialogInput('Введите Ккал', 'number')
                .then(kcalToday => {
                    setKcalToday($target, kcalToday)
                })
                .catch(error => {
                    if (error.message !== 'USER_CANCELLED') {
                        console.error(error)
                    }
                })
            break;
        case 'editMass':
            getDialogInput('Введите массу (кг)', 'number')
                .then(mass => {
                    // $target.data().foodMass = mass
                    setFoodMass($target, mass)
                })
                .catch(error => {
                    if (error.message !== 'USER_CANCELLED') {
                        console.error(error)
                    }
                })
            break;
        case 'editName':
            getDialogInput('Введите новое имя')
                .then(name => {
                    // debugger
                    setFoodName($target, name)
                })
                .catch(error => {
                    if (error.message !== 'USER_CANCELLED') {
                        console.error(error)
                    }
                })
            break;
        case 'cut':
            value = $target.text()
            $target.text('')
            navigator.clipboard.writeText(value)
            globalThis.buffer = value
            break;
        case 'copy':
            value = $target.text()
            debugger
            navigator.clipboard.writeText(value)
            // navigator.clipboard.write
            globalThis.buffer = value
            break;
        case 'paste':
            if (buffer) {
                $target.text(buffer)
            } else {
                navigator.clipboard.readText().then(value => {
                    $target.text(value)
                })
            }
            break;  
        case 'delete':
            $target.text('')
            break;
        default:
            break;
    }
}