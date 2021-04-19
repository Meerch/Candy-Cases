export function createNotification(selector, text) {
    const checkNotification = document.querySelector('.notification')
    if (checkNotification) {
        checkNotification.remove()
    }

    const notification = document.createElement('div')
    notification.classList.add('notification')
    notification.innerHTML = `
        <div class="notification__text">${text}</div>
    `
    selector.append(notification)

    setTimeout(() => {
        notification.style.opacity = '0'
    }, 2500)

    setTimeout(() => {
        notification.remove()
    }, 5500)
}