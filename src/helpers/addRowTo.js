// export default function addRowTo(table, elements, callback) {
//     let trElement = document.createElement('tr')
    
//     let tElements = []

//     elements.forEach(el => {
//         tElements.push(document.createElement(el))
//     })

//     tElements.forEach((el, index, arr) => {
//         callback($(el), index, arr)
//     })

//     tElements.forEach(el => {
//         trElement.appendChild(el)
//     })

//     table.append(trElement)
// }

// export default function addRowTo($table, elements, callback) {
//     const $tr = $('<tr>');
//     const tElements = elements.map(el => $('<' + el + '>')[0]);

//     tElements.forEach((el, index, arr) => {
//         callback($(el), index, arr);
//     });

//     $tr.append(tElements).appendTo($table);
// }

export default function addRowTo($table, elements, callback) {
    const $tr = $('<tr>');
    const $tElements = [];

    // Используем $.each вместо elements.forEach или map
    $.each(elements, function(index, elTag) {
        $tElements.push($('<' + elTag + '>'));
    });

    const res = []

    // Вызываем callback для каждого созданного элемента
    $.each($tElements, function(index, $el) {
        res.push(callback($el, index, $tElements));
    });

    // Добавляем все элементы в строку и строку в таблицу
    $tr.append($tElements).appendTo($table);

    return res
}
