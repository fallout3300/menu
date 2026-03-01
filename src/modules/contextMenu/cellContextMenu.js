import Food from '@/entity/Food/Food';
import getDialogInput from '@/helpers/getDialogInput';
import getFoodInput from '@/helpers/getFoodInput';
// import contextMenuLogic from './helpers/logic'
import 'jquery-contextmenu';
import 'jquery-contextmenu/dist/jquery.contextMenu.css';

export default function cellContextMenu(table) {
    $.contextMenu({
        selector: '#tab td',
        build: function ($trigger, e) {
            const { x, y } = $trigger.data()
            const cell = table.rows.at(y).at(x)


            return {
                className: 'table-context-menu',
                items: {
                    "kcalToday": {
                        name: "Ккал на прием: " + cell.kcalToday,
                        icon: "fire",
                        className: 'blue',
                        callback: (() => {
                            getDialogInput('Введите новые Ккал', 'text', cell.kcalToday)
                                .then(kcalToday => cell.setKcalToday(kcalToday))
                                .catch(console.error)
                        })
                    },
                    "sep1": "---------",
                    "edit": {
                        name: "Добавить Еду",
                        icon: "paste",
                        className: "green",
                        callback: (() => {
                            getFoodInput({foodName: 'Рис', foodProportion: '100', foodMass: ''})
                                .then(({foodName, foodProportion, foodMass}) => {
                                    if (!foodName) {
                                        return
                                    }
                                    let proportion = 100
                                    if (foodProportion) {
                                        proportion = foodProportion
                                    }
                                    const food = new Food(foodName, cell.kcalToday, proportion)


                                    if (foodMass) {
                                        food.setMass(foodMass)
                                    } else {
                                        food.calculateMass()
                                    }

                                    cell.addElement(food)
                                    // food.updateHtmlContent()
                                })
                                .catch(console.error)
                        })
                    },
                    // "copy": { 
                    //     name: "Копировать", 
                    //     icon: "copy", 
                    //     className: "green",
                    //     callback: (() => {

                    //     })
                    // },
                    // "paste": { name: "Вставить", icon: "paste", className: "orange" },
                    // "cut": { name: "Вырезать", icon: "cut", className: "orange" },
                    // "delete": { name: "Удалить", icon: "delete", className: "red" }
                }
            };
        }
    });
}
