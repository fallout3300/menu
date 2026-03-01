export default function splitString(arrayName, specialSymbol = ',') {
    globalThis.formData[arrayName] = globalThis.formData[arrayName]
        .split(specialSymbol)
        .map(i => i.trim())
        .filter(i => i.length > 0)
        // .map((i, index) => {
        //     return [i, index]
        // })
    globalThis.formData[arrayName].lastIndex = 0
    return globalThis.formData[arrayName]
}