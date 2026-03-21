const canvas = document.getElementById('canvas')
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const sizeEl = document.getElementById('size')
const colorEl = document.getElementById('color')
const clearEl = document.getElementById('clear')

const ctx = canvas.getContext('2d')

let size = 10;
let isPressed = false;
colorEl.value = '#000000';
let color = colorEl.value;
let x;
let y;

// Mouse events
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        if (x !== undefined && y !== undefined) {
            drawSmoothLine(x, y, x2, y2)
        }

        x = x2
        y = y2
    }
})

// Touch events for touchscreen support
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault()
    isPressed = true;
    const rect = canvas.getBoundingClientRect()
    const touch = e.touches[0]
    x = touch.clientX - rect.left
    y = touch.clientY - rect.top
})

canvas.addEventListener('touchend', (e) => {
    e.preventDefault()
    isPressed = false;
    x = undefined
    y = undefined
})

canvas.addEventListener('touchmove', (e) => {
    e.preventDefault()
    if (isPressed) {
        const rect = canvas.getBoundingClientRect()
        const touch = e.touches[0]
        const x2 = touch.clientX - rect.left
        const y2 = touch.clientY - rect.top

        if (x !== undefined && y !== undefined) {
            drawSmoothLine(x, y, x2, y2)
        }

        x = x2
        y = y2
    }
})

function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size*2
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.stroke()
}

function drawSmoothLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizeEl.innerText = size
}

increaseBtn.addEventListener('click', () => {
    size += 5
    if (size>5) {
        size=15
        }
    updateSizeOnScreen()
})
decreaseBtn.addEventListener('click', () => {
    size -= 5
    if (size<5) {
        size=5
    }
    updateSizeOnScreen()
})
colorEl.addEventListener('change', (e)=>color=e.target.value)

// Clear handler: clear using device pixel coords (reset transform to be safe)
clearEl.addEventListener('click', ()=>{
    ctx.save()
    ctx.setTransform(1,0,0,1,0,0)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.restore()
})

// Resize / DPI handling -------------------------------------------------
function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    // preserve current content
    const tmp = document.createElement('canvas')
    tmp.width = canvas.width
    tmp.height = canvas.height
    tmp.getContext('2d').drawImage(canvas, 0, 0)

    // set new size in device pixels
    canvas.width = Math.round(rect.width * dpr)
    canvas.height = Math.round(rect.height * dpr)
    canvas.style.width = rect.width + 'px'
    canvas.style.height = rect.height + 'px'

    // draw previous content back to the new canvas (device pixel-based)
    ctx.setTransform(1,0,0,1,0,0)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(tmp, 0, 0, tmp.width, tmp.height, 0, 0, canvas.width, canvas.height)

    // set transform so future drawing uses CSS pixels (easier mouse handling)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    // ensure line styling is preserved
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
}

// Initial sizing and on resize (debounced)
window.addEventListener('resize', debounce(resizeCanvas, 150))
window.addEventListener('orientationchange', debounce(resizeCanvas, 150))
window.addEventListener('load', resizeCanvas)
resizeCanvas()

// Debounce helper
function debounce(fn, ms) {
    let t
    return (...args) => {
        clearTimeout(t)
        t = setTimeout(() => fn(...args), ms)
    }
}