export function capitalize(string) {
    if (typeof string !== 'string') {
        return ''
    }
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function attr(element, attr) {
    return element.getAttribute(attr)
}

export function getRandomNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}


export function storage(name, value = null) {
    if (value == null || value == undefined) {
        return JSON.parse(localStorage.getItem(name))
    }
    localStorage.setItem(name, JSON.stringify(value))
}