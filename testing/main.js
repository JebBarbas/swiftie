// @ts-check

const txtText = document.getElementById('txtText') || document.createElement('input')
const s = document.querySelector('.bigSwiftie') || document.createElement('div')
const fonts = document.querySelectorAll('.font')

const defaults = [
    "Taylor Swift", "FEARLESS","Speak Now", "RED", "1989", "reputation",
    "Lover", "folklore", "evermore", "FEARLESS (Taylor's Version)" , "RED (Taylor's Version)","Midnights"
]

const bgs = [
    'taylor-swift', 'fearless', 'speak-now', 'red', '1989', 'reputation',
    'lover', 'folklore', 'evermore', 'fearless-tv', 'red-tv', 'midnights'
]

const random = Math.floor(Math.random() * bgs.length)

let indexToUse = random
let text = ''

function paintS(textToUse){
    // Clears all the classlist
    s.classList.remove(...s.classList)

    s.classList.add('bigSwiftie',`bg-${bgs[indexToUse]}`, `font-${bgs[indexToUse]}`)
    
    s.textContent = textToUse
}
paintS(defaults[indexToUse])

fonts.forEach((div, i) => {
    div.addEventListener('click', () => {
        indexToUse = i
        paintS(text || defaults[indexToUse])
    })
})

txtText.addEventListener('input', e => {
    // @ts-ignore
    text = e.target.value

    fonts.forEach((div, i) => {
        div.textContent = text || defaults[i]
    })

    paintS(text || defaults[indexToUse])
})