const btn = document.querySelector('.btn')
const switchElement = document.querySelector('.switch')

switchElement.addEventListener('scroll', (evt) => {
    const y = evt.target.scrollTop

    if (y > 127) {
        switchElement.classList.add('active')
        document.body.style.background = `rgb(${y}, ${y}, ${y})`
        btn.style.background = `rgba(${y}, ${y}, ${y}, 1)`
        switchElement.style.background = `rgba(${y - 8}, ${y - 6}, ${y - 3}, 1)`
    } else {
        switchElement.classList.remove('active')
        document.body.style.background = `rgb(${y + 30}, ${y + 34}, ${y + 38})`
        btn.style.background = `rgba(${y}, ${y + 8}, ${y + 16}, 1)`
        switchElement.style.background = `rgba(${y + 20}, ${y + 24}, ${y + 28}, 1)`
    }
})