import getDialogInput from '@/helpers/getDialogInput';
// import contextMenuLogic from './helpers/logic'
import 'jquery-contextmenu';
import 'jquery-contextmenu/dist/jquery.contextMenu.css';

export default function foodContextMenu(table) {
    $.contextMenu({
        selector: '#tab details',
        build: function ($trigger, e) {
            const { x, y } = $trigger.parent().parent().data()
            const foodId = $trigger.data('foodId')
            const cell = table.rows.at(y).at(x)
            const food = cell.content.find(food => food.id === foodId)
            console.log(food)

            return {
                className: 'table-context-menu',
                items: {
                    "calculate": {
                        name: "Расчитать",
                        icon: "edit",
                        className: "blue",
                        callback: (() => {
                            food.calculateMass()
                        })
                    },
                    "name": {
                        name: "Еда: " + food.name,
                        icon: "edit",
                        className: "green",
                        callback: (() => {
                            getDialogInput('Введите новую еду', 'text', food.name)
                                .then(name => {
                                    food.name = name
                                    food.calculateMass()
                                })
                                .catch(console.error)
                        })
                    },
                    // "paste": { name: "Вставить", icon: "paste", className: "orange" },
                    // "cut": { name: "Вырезать", icon: "cut", className: "orange" },
                    "delete": { 
                        name: "Удалить", 
                        icon: "delete", 
                        className: "red",
                        callback: (() => {
                            cell.removeElementById(food.id)
                        })
                    }
                }
            };
        }
    });
}
