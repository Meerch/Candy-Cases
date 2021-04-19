import {AppComponent} from "../../core/AppComponent";
import {attr, storage} from "../../core/utils";

export class Inventory extends AppComponent {

    static className = 'inventory'
    static rootTag = 'section'

    constructor($root, options) {
        super($root, {
            name: 'Inventory',
            listeners: ['click'],
            ...options
        })
    }


    toHTML() {
        if (!storage('inventory')) {
            storage('inventory', [])
        }

        return `
            <div class="container">
                <div class="inventory__content">
                    <div class="inventory__utilities">
                        <button class="inventory__utilities-button sell" data-button="sell-all-prizes">
                            <span class="inventory__utilities-name">Sell everything</span>
                        </button>
                        <button class="inventory__utilities-button descending ${storage('conditionDescending') ? 'selected' : ''}" data-button="sort-descending">
                            <img src="src/assets/utilities/descending.png" alt="" class="inventory__utilities-icon">
                        </button>
                        <button class="inventory__utilities-button ascending ${storage('conditionAscending') ? 'selected' : ''}" data-button="sort-ascending">
                            <img src="src/assets/utilities/ascending.png" alt="" class="inventory__utilities-icon">
                        </button>
                    </div>
                    <div class="inventory__items ${storage('inventory').length === 0 ? 'clear' : ''}" data-type="inventory" >
                        ${this.spawnPrizes()}
                    </div>
                </div>
            </div>
        `
    }

    spawnPrizes() {
        let template = ``
        storage('inventory').forEach(prize => {
            if (!prize) {
                return false
            }
            template += `
                <div class="inventory__item rare-${prize.rare.index}" data-id-prize="${prize.id}" data-price-prize="${prize.price}">
                    <button class="inventory__item-sell" data-button="sell-prize">Sell</button>
                    <div class="inventory__item-name">${prize.name}</div>
                    <div class="inventory__item-image">
                        <img src="${prize.image}" alt="${prize.name}" class="inventory__item-icon">
                    </div>
                    <div class="inventory__item-price">${prize.price} candy</div>
                </div>
            `
        })
        return template
    }

    sortPrizes(target) {
        const checkDescending = attr(target, 'data-button') === 'sort-descending' || attr(target.parentNode, 'data-button') === 'sort-descending'
        const checkAscending = attr(target, 'data-button') === 'sort-ascending' || attr(target.parentNode, 'data-button') === 'sort-ascending'
        if (checkDescending || checkAscending) {
            const inventory = storage('inventory')
            if (inventory.length === 0 || !inventory) {
                return false
            }

            const [$buttonAscending, $buttonDescending] = this.removeSelectedButton()


            if (checkDescending) {
                $buttonDescending.classList.add('selected')
                storage('conditionDescending', true)
                inventory.sort((a, b) => {
                    if (a.price < b.price) {
                        return 1;
                    }
                    if (a.price > b.price) {
                        return -1;
                    }
                    return 0;
                })

            } else if (checkAscending) {
                $buttonAscending.classList.add('selected')
                storage('conditionAscending', true)
                inventory.sort((a, b) => {
                    if (a.price > b.price) {
                        return 1;
                    }
                    if (a.price < b.price) {
                        return -1;
                    }
                    return 0;
                })
            }

            storage('inventory', inventory)
            const $inventory = document.querySelector('[data-type="inventory"]')
            $inventory.innerHTML = this.spawnPrizes()
            this.$emit('createNotification', `inventory sorted`)
        }
    }

    removeSelectedButton() {
        const $buttonAscending = document.querySelector('[data-button="sort-ascending"]')
        const $buttonDescending = document.querySelector('[data-button="sort-descending"]')
        $buttonDescending.classList.remove('selected')
        $buttonAscending.classList.remove('selected')
        storage('conditionDescending', false)
        storage('conditionAscending', false)
        return [$buttonAscending, $buttonDescending]
    }

    sellAllPrizes(target) {
        const inventory = storage('inventory')
        if ((attr(target, 'data-button') === 'sell-all-prizes' || attr(target.parentNode, 'data-button') === 'sell-all-prizes') && inventory.length !== 0) {
            storage('inventory', [])
            const sum = inventory.reduce((acc, prize2) => acc + prize2.price, 0)
            super.updateBalance(sum)
            this.$emit('createNotification', `All prizes was sold out`)

            this.removeSelectedButton()
            this.makeConditionClearInventory()

        }
    }

    makeConditionClearInventory() {
        const $inventory = document.querySelector('[data-type="inventory"]')
        $inventory.innerHTML = ''
        $inventory.classList.add('clear')
    }

    sellPrize(target) {
        if (attr(target, 'data-button') === 'sell-prize') {
            const parent = target.parentNode
            const idPrize = attr(parent, 'data-id-prize')
            const pricePrize = Number(attr(parent, 'data-price-prize'))
            super.sellPrize(idPrize, pricePrize)

            parent.remove()

            if (storage('inventory').length === 0 || !storage('inventory')) {
                this.removeSelectedButton()
                const $inventory = document.querySelector('[data-type="inventory"]')
                $inventory.classList.add('clear')
            }
        }
    }

    onClick(event) {
        const $target = event.target
        this.sellPrize($target)
        this.sellAllPrizes($target)
        this.sortPrizes($target)
    }
}