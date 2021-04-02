import {AppComponent} from "../../core/AppComponent";

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
        console.log('work nav')
        const navigation = document.querySelectorAll('[data-section]')
        const section = document.querySelector(`[data-section="${target}"]`)

        navigation.forEach(section => {
            section.classList.remove('selected')
        })
        section.classList.add('selected')
    }

    onClick(event) {
        const target = event.target.getAttribute('data-section') ||
                       event.target.parentElement.getAttribute('data-section')
        if (target) {
            // console.log(target)
            this.$emit('renderNewSection', target)
            this.changeSelectedSection(target)
        }

    }

}