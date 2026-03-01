export default function onlySplitString(array, specialSymbol = ',') {
    return array
        .split(specialSymbol)
        .map(i => i.trim())
        .filter(i => i.length > 0)
}