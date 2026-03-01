export default function clearTable($t) {
    $t.find('tr').first().siblings().remove()
}