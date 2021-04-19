import {AppComponent} from "../../core/AppComponent";
import {attr} from "../../core/utils";

export class InnerCase extends AppComponent {

    static className = 'case-inner'
    static rootTag = 'section'

    constructor($root, options) {
        super($root, {
            name: 'Inner-Case',
            listeners: ['click'],
            ...options
        })
        this.unlock = true
    }


    toHTML() {
        const {image, price, prizes} = this.currentCase
        return `
        <div class="container">
            <div class="case-inner__content">
                <button class="case-inner__come-back" data-button="back-cases">Go back to the cases</button>
                <div class="case-inner__image" data-type="field-spin">
                    <img class="case-inner__icon" src="${image}" alt="">
                </div>
                <button class="case-inner__button" data-button="start-spin">Open for ${price} candy</button>
                <div class="possible-loot">
                    <div class="possible-loot__title">Item's in the case:</div>
                    <div class="possible-loot__items">
                    ${this.generatePossiblePrize(prizes)}
                    </div>
                </div>
            </div>
        </div>
        `
    }

    generatePossiblePrize(prizes) {
        let template = ``
        prizes
            .sort((a, b) => a.prize.rare.index - b.prize.rare.index)
            .forEach(prizes => {
                const {image, name, rare} = prizes.prize
                template += `<img class="possible-loot__item" src="${image}" alt="${name}" data-rarity="${rare.rarity}">\n`
            })
        return template
    }

    goBackCases(target) {
        const section = 'cases'
        if (attr(target, 'data-button') === 'back-cases') {
            this.$emit('renderNewSection', section)
            this.$emit('changeSelectedSection', section)
        }
    }


    onClick(event) {
        const $target = event.target
        this.goBackCases($target)
        this.openCase.call(this, $target, this.currentCase)
        this.interactWonPrize($target)
    }
}