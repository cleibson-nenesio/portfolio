const myName = document.querySelector('.my-name')
const subtitle = document.querySelector('h3')

const typeWriter = (elemen) => {
    const sentence = elemen.innerText
    const splitSetence = sentence.split('')
    elemen.innerHTML = ''

    splitSetence.forEach((letter, index) => {
        setTimeout(() => elemen.innerHTML += letter, 75 * index)
    })
}

typeWriter(myName)
typeWriter(subtitle)