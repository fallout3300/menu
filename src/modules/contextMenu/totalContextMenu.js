import { $plusBtn, totalTable } from '@/helpers/calculateMass';
import 'jquery-contextmenu';
import 'jquery-contextmenu/dist/jquery.contextMenu.css';

export default function totalContextMenu() {
    $.contextMenu({
        selector: '#total-table th, #total-table td',
        build: function ($trigger, e) {
            const { x, y } = $trigger.data()
            // console.log(totalTable.rows[y])

            return {
                className: 'table-context-menu',
                items: {
                    "add": {
                        name: "Добавить",
                        icon: "edit",
                        className: "green",
                        callback: (() => {
                            $plusBtn.trigger('click')
                        })
                    },
                    "delete": { 
                        name: "Удалить", 
                        icon: "delete", 
                        className: "red",
                        callback: (() => {
                            $trigger.parent().remove()
                            totalTable.rows.splice(y, 1)
                            // console.log($trigger.parent())
                        })
                    }
                }
            };
        }
    });
}
