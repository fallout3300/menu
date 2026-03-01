import getDialogInput from "@/helpers/getDialogInput"
import getFoodMass from "@/helpers/getFoodMass"
import playAnimation from "@/helpers/playAnimation"

export default class Food {
    static lastId = 0
    textContent = ''
    mass = 0
    isMassFound = true
    isHandChanged = false
    
    constructor(name, kcalToday, proportion = 100) {
        this.name = name
        this.proportion = proportion
        this.id = Food.lastId++

        this.kcalToday = kcalToday
        // this.calculateMass()
    }

    // set kcalToday(value) {
    //     this.kcalToday = +value
    //     this.updateHtmlContent()
    // }
    updateTextContent() {
        if (this.name) {
            if (this.mass) {
                this.textContent = (this.name + ' (' + this.mass + 'гр' + ')')
            } else {
                this.textContent = this.name
            }
        } else {
            this.textContent = '-'
        }
    }
    setMass(mass) {
        if (mass) {
            this.mass = mass
            this.isHandChanged = true
            this.updateHtmlContent()
        }
    }
    calculateMass() {
        // debugger

        this.mass = Math.round(
            getFoodMass(this.name, this.kcalToday) * (this.proportion / 100)
        )
        if (!this.mass) {
            this.isMassFound = false
        }
        this.isHandChanged = false
        this.updateHtmlContent()
        return this.mass
    }
    updateHtmlContent($details = this.$details) {
        this.$details = $details ? $details.empty() : $('<details>')
        
        this.$details.attr('class', 'food')
        this.$details.css('position', 'relative')
        // $details.append($('<div>').text(food.textContent))
        const $content = $('<div>', { class: 'content' })

        {
            let text = this.mass ? this.mass + 'гр' : '-' 
            const $p = $('<p>').append('Вес: ', $('<span>').text(text))
            $p.click((event) => {
                getDialogInput('Введите новый вес (кг)', 'number', this.mass)
                    .then(mass => {
                        console.log(mass)
                        this.setMass(+mass)
                        this.updateHtmlContent()
                    })
                    .catch(console.error)
            })
            $content.append($p)
        }
        {
            let text = this.proportion ? this.proportion + '%' : '-' 
            const $p = $('<p>').append('Соотношение: ', $('<span>').text(text))
            $p.click((event) => {
                getDialogInput('Введите новое Соотношение (%)', 'number', this.proportion)
                    .then(proportion => {
                        this.proportion = +proportion
                        this.calculateMass()
                        this.updateHtmlContent()
                    })
                    .catch(console.error)
            })
            $content.append($p)
        }


        const $summary = $('<summary>')
        this.updateTextContent()
        $summary.text(this.textContent)

        if (this.isHandChanged) {
            this.$details.addClass('handchanged')
        }
        if (!this.mass) {
            this.$details.addClass('massnotfound')
        }

        this.$details.data('foodId', this.id)
        this.$details.append($summary, $content)
        
        playAnimation(this.$details, 'succsess')
        return this.$details
    }
}