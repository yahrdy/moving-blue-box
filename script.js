let x = 0
let y = 50
let xDir = 'right'
let yDir = 'bottom'

setInterval(() => {
    moveX()
    moveY()
}, 1000)

function moveX() {
    let box = document.getElementById('box')
    let leftPosition = parseInt(box.style.left) || 0
    if (leftPosition < innerWidth && xDir === 'right') {
        if (x + 150 > innerWidth) {
            x = innerWidth - 100
            xDir = 'left'
        } else x += 50
    } else {
        leftPosition = parseInt(box.style.left) || 0
        if (leftPosition === 0) {
            x += 50
            xDir = 'right'
        } else {
            xDir = 'left'
            x - 50 < 0 ? x = 0 : x -= 50
        }
    }
    box.style.left = x + 'px'
}

function moveY() {
    let box = document.getElementById('box')
    let topPosition = parseInt(box.style.top) || 0
    if (topPosition < innerHeight && yDir === 'bottom') {
        if (y + 150 > innerHeight) {
            y = innerHeight - 100
            yDir = 'top'
        } else y += 50
    } else {
        topPosition = parseInt(box.style.top) || 0
        if (topPosition === 0) {
            y += 50
            yDir = 'bottom'
        } else {
            yDir = 'top'
            y - 50 < 0 ? y = 0 : y -= 50
        }
    }
    box.style.top = y + 'px'
}