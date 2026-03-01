export default function playAnimation($el, animationName) {
    $el.addClass(animationName)
    $el.one('animationend', function(event) {
        $el.removeClass(animationName)
    })
}