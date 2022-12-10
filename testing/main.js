const txtText = document.getElementById('txtText')

const defaults = [
    "Taylor Swift", "FEARLESS","Speak Now", "RED", "1989", "reputation",
    "Lover", "folklore", "evermore", "FEARLESS (Taylor's Version)" , "RED (Taylor's Version)","Midnights"
]

txtText.addEventListener('input', e => {
    const text = e.target.value

    document.querySelectorAll('.font').forEach((div, i) => {
        div.innerText = text || defaults[i]
    })
})