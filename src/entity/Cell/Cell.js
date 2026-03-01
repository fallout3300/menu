import playAnimation from "@/helpers/playAnimation"
import Food from "../Food/Food"
import getDialogInput from "@/helpers/getDialogInput"

export default class Cell {
    content = []

    constructor($element, kcalToday) {
        this.$element = $element
        this.kcalToday = kcalToday
    }

    addElements(elements) {
        elements.forEach(el => {
            this.content.push(el)
        })
        this.updateHtmlContent()
    }
    addElement(element) {
        this.content.push(element)
        this.updateHtmlContent()
    }
    removeElementById(id) {
        const index = this.content.findIndex(food => food.id === id)
        this.content.splice(index, 1)
        this.updateHtmlContent()
    }
    removeAllElements() {
        this.content = []
    }
    forEach(callback) {
        this.content.forEach(callback)
        this.updateHtmlContent()
    }

    updateHtmlContent() {
        this.htmlContent = $('<div>')
        this.htmlContent.addClass('cell')

        this.content.forEach((food, index, arr) => {
            // debugger
            const $details = food.updateHtmlContent()
            this.htmlContent.append($details)
        })
        
        this.$element.empty().append(this.htmlContent)
        playAnimation(this.$element, 'succsess')
    }

    randomizeFood(row) {
        let arrayName;
        switch (row - 1) {
            case 0:
                arrayName = 'breakfasts'
                break;
            case 1:
                arrayName = 'snack1'
                break;
            case 2:
                arrayName = 'snack2'
                break;
            case 3:
                arrayName = 'dinners'
                break
            default:
                arrayName = 'breakfasts'
                break;
        }
        
        let { lastIndex, length } = formData[arrayName]
    
        const foodListForToday = globalThis.formData[arrayName][lastIndex]

        if (lastIndex >= length - 1) {
            formData[arrayName].lastIndex = 0
        } else {
            formData[arrayName].lastIndex++
        }

        foodListForToday.forEach(el => {
            const food = new Food(el.foodName, this.kcalToday, el.foodProportion)
            food.calculateMass()
            this.content.push(food)
        })
        this.updateHtmlContent()
    }

    setKcalToday(value) {
        debugger
        this.kcalToday = +value
        if (this.content.length > 0) {
            this.content.forEach(food => {
                food.kcalToday = this.kcalToday
                food.calculateMass()
            })
        }
        playAnimation(this.$element, 'succsess')
    }
}
