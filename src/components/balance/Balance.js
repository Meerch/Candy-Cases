import {AppComponent} from "../../core/AppComponent";

export class Balance extends AppComponent {
    static className = 'balance'
    static rootTag = 'header'

    constructor($root, options) {
        super($root, {
            name: 'Balance',
            ...options
        });
    }


    //  <header class="balance"></header>
    toHTML() {
        return `
            <div class="container">
                <div class="balance__content">
                    <span class="balance__value">Balance: 10  candy</span>
                </div>
            </div>
        `
    }


}