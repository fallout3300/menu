import moveCursorToEndOfLine from "@/helpers/moveCursorToEndOfLine"
import { $table } from "../consts"

export default function addContenteditableListeners() {
    $table.find('th, td').keydown(function(event) {
        if ((event.key === 'Enter' && event.ctrlKey) || event.key === 'Escape') {
            // Ctrl + Enter || Esc
            $(this).blur()
        }
    })
    $table.find('th, td').blur(function(event) {
        $(this).removeAttr('contenteditable')
        this.dataset.handchanged = 'true'
    })
    $table.find('th, td').dblclick(function(event) {
        $(this).attr('contenteditable', 'true')
        $(this)[0].focus()

        moveCursorToEndOfLine(this)
    })
}