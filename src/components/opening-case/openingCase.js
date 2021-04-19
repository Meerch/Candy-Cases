import {attr, getRandomNumber, storage} from "../../core/utils";
import {soundClick} from "../audio/audio";

export function openCase($target, currentCase) {
    const checkTarget = attr($target, 'data-button') === "start-spin" || attr($target.parentNode, 'data-button') === "start-spin"

    if (checkTarget && this.unlock) {
        this.unlock = false
        if (this.name === 'Free') {
            const dateNow = +new Date()
            storage('lastTimeOpening', dateNow)
        }

        const updatedBalance = (storage('balance') || this.balance) - currentCase.price
        if (updatedBalance < 0) {
            this.$emit('createNotification', 'Insufficient funds')
            this.unlock = true
            return false
        }
        storage('balance', updatedBalance)
        this.$emit('updateBalance')

        const $fieldSpin = document.querySelector('[data-type="field-spin"]')
        while ($fieldSpin.firstChild) {
            $fieldSpin.removeChild($fieldSpin.firstChild)
        }

        $fieldSpin.classList.add('spin')
        const $spinner = document.createElement('div')
        $spinner.classList.add('spinner')
        $fieldSpin.append($spinner)
        const $prizes = document.createElement('div')
        $prizes.classList.add('spinner__prizes')
        const pointer = document.createElement('div')
        pointer.classList.add('spinner__pointer')
        $spinner.append(pointer)
        $spinner.append($prizes)
        for (let i = 0; i < 70; i++) {
            let prize = spawnPrize(currentCase)
            $prizes.append(prize)
        }

        const randomNum = getRandomNumber(570, 580)


        setTimeout(() => {
            $prizes.style.transition = 'left 0s linear'
            $prizes.style.left = `-${randomNum}%`
            getWonPrize.call(this, pointer, $prizes, currentCase)
            $prizes.style.left = `0`
            let inventory = storage('inventory') || []
            inventory.push(this.wonPrize)
            storage('inventory', inventory)
        }, 100)


        setTimeout(() => {
            soundClick($target)
            $prizes.style.transition = 'left 5s ease'
            $prizes.style.left = `-${randomNum}%`
        }, 500)

        setTimeout(() => {
            getWonPrize.call(this, pointer, $prizes, currentCase)
            createWindowInteracting.call(this, $fieldSpin)
        }, 7500)
        return true
    } else {
        return false
    }
}

function createWindowInteracting($fieldSpin) {
    const windowPrize = document.createElement('div')
    windowPrize.classList.add('inner-case__prize')
    windowPrize.innerHTML = `
                            <div class="inner-case__prize-header">
                                <div class="inner-case__prize-title">Your winnings</div>
                                <div class="inner-case__prize-button close" data-button="get-prize">&#10006</div>
                            </div>
                            <div class="inner-case__prize-image" data-rarity="${this.wonPrize.rare.rarity}">
                                <img class="inner-case__prize-icon" src="${this.wonPrize.image}" alt="${this.wonPrize.name}">
                            </div>
                            <div class="inner-case__prize-price">
                                <div class="inner-case__prize-text">${this.wonPrize.price} candy</div>
                            </div>
                            <div class="inner-case__prize-buttons">
                                <div class="inner-case__prize-button get" data-button="get-prize">Get</div>
                                <div class="inner-case__prize-button sell" data-button="sell-prize">Sell</div>
                            </div>
                        `

    $fieldSpin.append(windowPrize)
}

function getWonPrize(pointer, $prizes, prizes) {
    const coordsPointer = pointer.getBoundingClientRect()
    $prizes.childNodes.forEach(prize => {
        const coordsPrize = prize.getBoundingClientRect()
        const checkLeftSide = coordsPrize.left < (coordsPointer.left + (coordsPointer.width / 2))
        const checkRightSide = coordsPrize.left + coordsPrize.width > (coordsPointer.left + (coordsPointer.width / 2))

        if (checkLeftSide && checkRightSide) {
            const idWonPrize = Number(attr(prize, 'data-prize-id'))
            prizes.prizes.forEach(prize => {
                prize.prize.id === idWonPrize ? this.wonPrize = prize.prize : false
            })
        }
    })
}

function getRandomPrize(currentCase) {
    let line = []

    currentCase.prizes.forEach((item, index) => {
        line[index] = (item.chance + (line[index - 1] || 0))
    })
    line.unshift(0)
    const max = Math.max(...line)
    const random = getRandomNumber(0, max)
    let result = null

    line.some((item, index, array) => {
        if (item <= random && random < (array[index + 1] || 0)) {
            result = currentCase.prizes[index]
            return result
        }
    })
    return result.prize
}

function spawnPrize(currentCase) {
    const $prize = document.createElement('div')
    $prize.classList.add('spinner__prize')
    const randomPrize = getRandomPrize(currentCase)
    $prize.setAttribute('data-rarity', randomPrize.rare.rarity)
    $prize.setAttribute('data-prize-id', randomPrize.id)

    const $prizeImage = document.createElement('img')
    $prizeImage.setAttribute('src', randomPrize.image)
    $prizeImage.classList.add('spinner__prize-image')

    $prize.append($prizeImage)

    return $prize
}