import {DomListener} from "./DomListener";
import {attr, storage} from "./utils";
import {openCase} from "../components/opening-case/openingCase";


export class AppComponent extends DomListener {

    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name || ''
        this.emitter = options.emitter
        this.currentCase = options.currentCase
        this.balance = options.balance
        this.wonPrize = null
        this.unsubscribers = []
        this.unlock = true
    }

    openCase($target, currentCase) {
        openCase.call(this, $target, currentCase)
    }

    sellPrize(id, price) {
        const inventory = storage('inventory')
        const indexes = []
        inventory.forEach((prize, index) => {
            if (prize.id == id) {
                indexes.push(index)
                this.$emit('createNotification', `${prize.name} sold out`)
            }
        })
        inventory.splice(indexes[indexes.length - 1], 1)
        storage('inventory', inventory)

        this.updateBalance(price)
    }

    updateBalance(price) {
        const updatedBalance = storage('balance') + price
        storage('balance', updatedBalance)
        this.$emit('updateBalance')
    }


    interactWonPrize(target) {
        const checkOnButton = attr(target, 'data-button')
        if (checkOnButton === 'get-prize' || checkOnButton === 'sell-prize') {
            const nameWonPrize = this.wonPrize.name

            this.$emit('createNotification', `${nameWonPrize} received`)
            if (checkOnButton === 'sell-prize') {
                this.sellPrize(this.wonPrize.id, this.wonPrize.price)
                this.$emit('createNotification', `${nameWonPrize} sold out`)
            }

            const windowInteract = document.querySelector('.inner-case__prize')
            windowInteract.remove()
            this.unlock = true
        }
    }


    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }


    toHTML() {
        return ''
    }

    init() {
        this.initDOMListeners()
    }

    destroy() {
        this.removeDOMListeners()
        this.unsubscribers.forEach(unsub => unsub())
    }
}