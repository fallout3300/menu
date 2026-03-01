export default function moveCursorToEndOfLine(el) {
    if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
        const range = document.createRange();
        range.selectNodeContents(el); // Выбираем все содержимое элемента
        range.collapse(false);        // Схлопываем выделение в конец (false = конец)
        
        const sel = window.getSelection();
        sel.removeAllRanges();        // Очищаем текущие выделения
        sel.addRange(range);          // Применяем наше новое выделение
    }
}