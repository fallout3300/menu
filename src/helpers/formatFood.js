export default function formatFood(name, mass) {
    if (name) {
        if (mass) {
            return (name + '(' + mass + 'гр' + ')')
        } else {
            return name
        }
    } else {
        return '-'
    }
}