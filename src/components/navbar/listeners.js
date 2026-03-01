import { $navButtons } from "@/components/navbar/consts"
import calculateMass from "@/helpers/calculateMass"
import unCalculateMass from "@/helpers/unCalculateMass"

export default function navListeners() {
    // $('#total-nav, #total-container > .send').click(function(event) {
    //     calculateMass()
    // })
    $navButtons.click(function(event) {
        $navButtons.removeClass('select')
        $(this).addClass('select')
    
        // $('#' + $navButtons.attr('for')).addClass('hide')
        $navButtons.each((index, el) => {
            $('#' + $(el).attr('for')).addClass('hide')
        })
        
        $('#' + $(this).attr('for')).removeClass('hide')
    
        globalThis.nav = $(this).attr('for')
    })
}