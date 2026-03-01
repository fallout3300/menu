import { $form } from "@/components/form/consts"
import { getFormData } from "@/components/form/form"
import calculateTable from "@/components/table/helpers/calculateTable"

export default function submitListener() {
    $form.submit(function(event) {
        console.log('submit')
        
        event.preventDefault()
        
        getFormData()
        
        table.calculate()
    })
}