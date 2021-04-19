import {AppComponent} from "../../core/AppComponent";
import {storage} from "../../core/utils";

export class Balance extends AppComponent {
    static className = 'balance'
    static rootTag = 'header'

    constructor($root, options) {
        super($root, {
            name: 'Balance',
            ...options
        });
    }

    init() {
        super.init()
        this.$on('updateBalance', () => {
            const $balance = document.querySelector('[data-type="balance"]')
            const balance = Number(storage('balance'))
            $balance.textContent = `Balance: ${balance}  candy`
        })
    }

    toHTML() {
        return `
            <div class="container">
                <div class="balance__content">
                    <span class="balance__value" data-type="balance">Balance: ${this.balance}  candy</span>
                </div>
            </div>
        `
    }
}