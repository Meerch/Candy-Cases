import {AppComponent} from "../../core/AppComponent";
import {cases} from "./source";
import {attr} from "../../core/utils";

export class Cases extends AppComponent {

    static className = 'cases'
    static rootTag = 'section'

    constructor($root, options) {
        super($root, {
            name: 'Cases',
            listeners: ['click'],
            ...options
        })
        this.cases = cases
    }

    init() {
        super.init()
    }

    toHTML() {
        return `
            <div class="container">
                <div class="cases__content">
                    <div class="cases__title">Cases</div>
                    <div class="cases__items">
                            ${this.generateCases()}
                    </div>
                </div>
            </div>
        `
    }

    generateCases() {
        let template = ``
        this.cases.forEach(option => {
            const {id, image, price} = option
            if (price === 0) {
                return false
            }
            template += `
                <div class="case">
                    <div class="case__image" data-button="open-case" data-case-id="${id}">
                        <img class="case__icon" src="${image}" alt="">
                    </div>
                    <div class="case__price">${price} candy</div>
                </div>\n`
        })
        return template
    }

    onClick(event) {
        const $target = event.target
        const suitableElement = attr($target, 'data-button') || attr($target.parentElement, 'data-button')
        const caseId = attr($target, 'data-case-id') || attr($target.parentElement, 'data-case-id')

        this.$emit('addData', 'currentCase', cases[caseId - 1])

        const section = 'cases'
        if (suitableElement) {
            this.$emit('renderNewSection', 'innerCase')
            this.$emit('changeSelectedSection', section)
        }
    }
}