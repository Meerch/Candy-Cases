import {AppComponent} from "../../core/AppComponent";
import {cases} from "../cases/source";
import {attr, storage} from "../../core/utils";

export class Free extends AppComponent {

    static className = 'free'
    static rootTag = 'section'

    constructor($root, options) {
        super($root, {
            name: 'Free',
            listeners: ['click'],
            ...options
        })
        this.unlock = true
        this.case = cases[6]
        this.delay = 120
    }

    init() {
        super.init()

        const diff = this.getDiff()
        if (diff < this.delay) {
            this.setTimer(this.delay - diff)
        }
    }

    toHTML() {
        return `
            <div class="container">
                <div class="free__content">
                    <div class="free__title">Open a free case every 2 minute</div>
                    <div class="free__case" data-type="field-spin">
                        <img src="${this.case.image}" alt="Case" class="free__case-image">
                    </div>
                    <div class="free__button open" data-button="start-spin">
                        <span class="free__button--text">Open</span>
                    </div>
        
                </div>
            </div>
        `
    }

    getDiff() {
        const now = new Date()
        const lastTimeOpening = storage('lastTimeOpening') || (now - this.delay * 1000) - 1000
        const diff = Math.floor((now - lastTimeOpening) / 1000)
        return diff
    }

    setTimer(delay) {
        try {
            const textButton = document.querySelector('[data-button="start-spin"]').childNodes[1]
            let minutes = Math.floor((delay - (delay % 60)) / 60)
            let seconds = Math.floor(delay % 60)
            textButton.innerHTML = `${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`
            delay--
            if (minutes <= 0 && seconds <= 0) {
                textButton.innerHTML = 'Open'
                return
            }
            setTimeout(() => this.setTimer(delay), 1000)
        } catch (err) {
            return
        }

    }

    onClick(event) {
        const $target = event.target

        const checkTarget = attr($target, 'data-button') === "start-spin" || attr($target.parentNode, 'data-button') === "start-spin"
        if (checkTarget) {

            const diff = this.getDiff()
            if (diff > this.delay) {
                this.openCase.call(this, $target, this.case)
                this.setTimer(this.delay)
            } else if (diff < this.delay) {
                this.$emit('createNotification', 'You can\'t open it now')
                this.setTimer(this.delay - diff)
            }
        }

        this.interactWonPrize($target)
    }
}