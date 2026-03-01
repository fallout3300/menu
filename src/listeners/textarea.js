import $ from "jquery";

export default function textareListener() {
    $("textarea").keydown(function (event) {
        if (event.key === "Enter") {
            if (event.ctrlKey) {
                $form.trigger("submit");
                $("textarea").trigger("change");
            } else {
                const cursorPosition = this.selectionStart;
                if (
                    this.value[cursorPosition - 1] !== ";" &&
                    (this.value[cursorPosition + 1] === "\n" ||
                        this.value[cursorPosition + 1] === undefined) &&
                    this.value[cursorPosition - 1] !== "\n" &&
                    this.value[cursorPosition - 1] !== undefined
                ) {
                    // this.value[cursorPosition].splice(cursorPosition, 0, ';')
                    // this.value += ';'
                    const res =
                        this.value.slice(0, cursorPosition) +
                        ";" +
                        this.value.slice(cursorPosition);
                    if (res) {
                        this.value = res;
                    }
                }
            }
        }
    });
}
