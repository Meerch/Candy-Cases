import {AppComponent} from "../../core/AppComponent";
import {attr, storage} from "../../core/utils";

export class Navigation extends AppComponent {
    static className = 'navigation'
    static rootTag = 'nav'

    constructor($root, options) {
        super($root, {
            name: 'Navigation',
            listeners: ['click'],
            ...options
        })
    }


    init() {
        super.init()
        this.$on('changeSelectedSection', target => this.changeSelectedSection(target))
    }

    toHTML() {

        return `
            <div class="container">
                <div class="navigation__sections" data-type="navigation">
                    <button class="navigation__section selected" data-section="primary">
                        <div class="navigation__section-name">Primary</div>
                    </button>
                    <button class="navigation__section" data-section="cases">
                        <div class="navigation__section-name">Cases</div>
                    </button>
                    <button class="navigation__section" data-section="inventory">
                        <div class="navigation__section-name">Inventory</div>
                    </button>
                    <button class="navigation__section" data-section="free">
                        <div class="navigation__section-name">Free</div>
                    </button>
                </div>
            </div>
        `
    }

    changeSelectedSection(target) {
        const navigation = document.querySelectorAll('[data-section]')
        const section = document.querySelector(`[data-section="${target}"]`)

        navigation.forEach(section => {
            section.classList.remove('selected')
        })
        section.classList.add('selected')
    }

    onClick(event) {
        const target = attr(event.target, 'data-section') ||
            attr(event.target.parentElement, 'data-section')

        if (target) {
            storage('currentSection', target)
            this.$emit('renderNewSection', target)
            this.changeSelectedSection(target)
        }

    }
}