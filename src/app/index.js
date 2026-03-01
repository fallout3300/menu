// const originalAddEventListener = Element.prototype.addEventListener;

// Создаем хранилище для всех слушателей в окне
// globalThis._allEventListeners = [];

// Element.prototype.addEventListener = function (type, listener, options) {
//     // Сохраняем информацию о слушателе
//     globalThis._allEventListeners.push({
//         element: this,
//         type,
//         listener,
//         options,
//     });

//     // Вызываем оригинальный метод, чтобы всё работало как обычно
//     return originalAddEventListener.apply(this, arguments);
// };

import callListeners from "@/modules/callListeners/callListeners";
import { getFormData } from "@/components/form/form";
import cellContextMenu from "@/modules/contextMenu/cellContextMenu";
import autoload from "@/modules/autoload/autoload";

// Css
import "./index.css";
import Table from "@/entity/Table/Table";
import { $table } from "@/components/table/consts";
import foodContextMenu from "@/modules/contextMenu/foodContextMenu";
import totalContextMenu from "@/modules/contextMenu/totalContextMenu";

globalThis.buffer = "";
globalThis.nav = "total-container";

import createGist from "@/components/api/gist/helpers/createGist";
globalThis.createGist = createGist


// debugger

async function main() {
    const table = new Table($table)
    globalThis.table = table
    autoload().then((e) => {
		// getFormData();
		
		callListeners();
	
		cellContextMenu(table)
        foodContextMenu(table)
        totalContextMenu()
	});
}
main()