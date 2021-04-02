import {AppComponent} from "../../core/AppComponent";
import {cases} from "./source";

export class Cases extends AppComponent {

    static className = 'cases'
    static rootTag = 'section'

    constructor($root, options) {
        super($root, {
            name: 'Cases',
            ...options
        })
        this.cases = cases
    }

    toHTML() {
        this.generateCases()
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
            template += `
                <div class="case">
                    <div class="case__image">
                        <img class="case__icon" src="${image}" alt="">
                    </div>
                    <div class="case__price">${price} candy</div>
                </div>\n`
        })
        return template
    }
}