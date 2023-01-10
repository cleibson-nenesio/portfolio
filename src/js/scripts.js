const projectsList = document.querySelector('.projects-list')

const technologies = {
    react: '<i class="fab fa-react"></i>',
    javascript: '<i class="fab fa-js"></i>',
}

const projects = [
    {
        name: 'Password Generator',
        image: 'password-generator',
        stack: [technologies.javascript]
    },
    {
        name: 'Pokedéx',
        image: 'pokedex',
        stack: [technologies.react]
    },
    {
        name: 'Memory game',
        image: 'memory-game',
        stack: [technologies.javascript]
    },
    {
        name: 'Where in the World',
        image: 'where-in-the-world',
        stack: [technologies.react]
    },
]

projects.forEach(project => {
    projectsList.innerHTML += `
        <div class="project ${project.image}")">
            <h3>${project.name}</h3>
            <div class="languages-and-frameworks">
                ${project.stack.map(stack => innerHTML = stack)}
            </div>
            <div class="dark-background"></div>
        </div>
    `
})

//

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

//

const elementsToAnimate = document.querySelectorAll('[data-anime]')

const animateElements = (elemen) => {
    const intersectionObserver = new IntersectionObserver(entry => {
        if(entry[0].isIntersecting) elemen.classList.add('animate')
        if(!entry[0].isIntersecting) elemen.classList.remove('animate')
    })

    intersectionObserver.observe(elemen)
}

elementsToAnimate.forEach(elemen => {
    animateElements(elemen)
})