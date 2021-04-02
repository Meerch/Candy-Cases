import {AppComponent} from "../../core/AppComponent";

export class Inventory extends AppComponent {

    static className = 'inventory'
    static rootTag = 'section'

    constructor($root, options) {
        super($root, {
            name: 'Inventory',
            ...options
        });
    }

    prepare() {

    }

    toHTML() {
        return `
            <div class="container">
                <div class="inventory__content">
                    <div class="inventory__utilities">
                        <button class="inventory__utilities-button sell">
                            <span class="inventory__utilities-name">Sell everything</span>
                        </button>
                        <button class="inventory__utilities-button descending">
                            <img src="src/assets/utilities/descending.png" alt="" class="inventory__utilities-icon">
                        </button>
                        <button class="inventory__utilities-button ascending">
                            <img src="src/assets/utilities/ascending.png" alt="" class="inventory__utilities-icon">
                        </button>
                        <button class="inventory__utilities-button time">
                            <img src="src/assets/utilities/time.png" alt="" class="inventory__utilities-icon">
                        </button>
                    </div>
                    <div class="inventory__items">
                        <div class="inventory__item rare-1">
                            <button class="inventory__item-sell">Sell</button>
                            <div class="inventory__item-name">Jam</div>
                            <div class="inventory__item-image">
                                <img src="src/assets/prizes/jam.png" alt="" class="inventory__item-icon">
                            </div>
                            <div class="inventory__item-price">5 candy</div>
                        </div>
                        <div class="inventory__item rare-2">
                            <button class="inventory__item-sell">Sell</button>
                            <div class="inventory__item-name">Cake</div>
                            <div class="inventory__item-image">
                                <img src="src/assets/prizes/cake-1.png" alt="" class="inventory__item-icon">
                            </div>
                            <div class="inventory__item-price">11 candy</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}