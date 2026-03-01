import { $form } from "@/components/form/consts"
import { getFormData } from "@/components/form/form"
import calculateTable from "@/components/table/helpers/calculateTable"

export default function submitBtn() {
    // $form.submit(function(event) {
    //     event.preventDefault()
        
    //     getFormData()
        
    //     table.calculate()
    // })
    $form.find('button').click(function(event) {
        event.preventDefault()
        
        getFormData()
        
        table.update()
    })
}