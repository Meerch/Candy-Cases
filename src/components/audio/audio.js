export function soundClick($target) {
    const audio = document.createElement('audio')
    audio.autoplay = true
    audio.src = 'src/assets/audio/sound-roulette.mp3'
    audio.volume = 0.05
    const checkEl = document.querySelector(`.${$target.classList.item(0)}`)
    if (!checkEl) {
        audio.pause();
        audio.currentTime = 0;
    } else {
        $target.append(audio)

        setTimeout(() => {
            audio.remove()
        }, 5000)
    }

}