import {AppComponent} from "../../core/AppComponent";
import {attr} from "../../core/utils";

export class Primary extends AppComponent {

    static className = 'primary'
    static rootTag = 'section'

    constructor($root, options) {
        super($root, {
            name: 'Primary',
            listeners: ['click'],
            ...options
        });
    }

    toHTML() {
        return `
            <div class="container">
                <div class="primary__content">
                    <div class="primary__info">
                        <div class="primary__info-title">Welcome</div>
                        <br/>
                        <div class="primary__info-text">On this site, you can open boxes and win prizes. There are 4 rarity prizes: <span class="primary__info-rarity normal">Normal</span> & <span class="primary__info-rarity rare">Rare</span> & <span class="primary__info-rarity epic">Epic</span> & <span class="primary__info-rarity legendary">Legendary</span> rarity. Cases can be opened  for the fictional currency CANDY. If you run out of CANDY, you can get them for free in the Free section.</div>
                    </div>
                    <div class="primary__btn" data-button="open-cases">Start opening cases</div>
                </div>
            </div>
        `
    }

    onClick(event) {
        const $target = event.target
        const section = 'cases'
        if (attr($target, 'data-button') === 'open-cases') {
            this.$emit('renderNewSection', section)
            this.$emit('changeSelectedSection', section)
        }
    }
}