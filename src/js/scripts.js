const myName = document.querySelector('.my-name')
const subtitle = document.querySelector('h3')
const projectsList = document.querySelector('.projects-list')
const openMenu = document.querySelector('input[type="checkbox"]')

const projects = [
    {
        name: 'Password Generator',
        image: 'password-generator',
        deploy: 'https://cleibson-nenesio.github.io/gerador-de-senhas-aleatorias/',
        repository: 'https://github.com/cleibson-nenesio/gerador-de-senhas-aleatorias',
    },
    {
        name: 'Pokedéx',
        image: 'pokedex',
        deploy: 'https://pokeapi-pokedex-5u7a18j9y-cleibson-nenesio.vercel.app/',
        repository: 'https://github.com/cleibson-nenesio/pokeapi-pokedex',
    },
    {
        name: 'Portfólio',
        image: 'portfolio',
        deploy: 'https://portfolio-nuyarbr8w-cleibson-nenesio.vercel.app/',
        repository: 'https://github.com/cleibson-nenesio/portfolio',
    },
    {
        name: 'Memory game',
        image: 'memory-game',
        deploy: 'https://cleibson-nenesio.github.io/jogo-da-memoria/',
        repository: 'https://github.com/cleibson-nenesio/jogo-da-memoria',
    },
    {
        name: 'Where in the World',
        image: 'where-in-the-world',
        deploy: 'https://where-in-the-world-191kk6rpy-cleibson-nenesio.vercel.app/',
        repository: 'https://github.com/cleibson-nenesio/where-in-the-world',
    },
]

projects.forEach(project => {
    projectsList.innerHTML += `
        <div class="project ${project.image}")" data-anime="left">
            <div class="project-information" data-anime="left">
                <h3>${project.name}</h3>
                <div class="btn-project">
                    <a href="${project.deploy}" target="_blank">Deploy</a>
                    <a href="${project.repository}" target="_blank">Repositório</a>
                </div>
                <div class="dark-background"></div>
            </div>
        </div>`
})

openMenu.addEventListener('click', () => {
    document.body.style.overflow = 'scroll'
    
    document.querySelector('.menu').addEventListener('click', () => {
        document.body.style.overflow = 'scroll'
        openMenu.checked = false
    })

    if(openMenu.checked) document.body.style.overflow = 'hidden'
})

const animateElements = (elemen) => {
    const elementsObserver = new IntersectionObserver(entry => {
        if(entry[0].isIntersecting) elemen.classList.add('animate')
        if(!entry[0].isIntersecting) elemen.classList.remove('animate')
    })

    elementsObserver.observe(elemen)
}

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

const elementsToAnimate = document.querySelectorAll('[data-anime]')

elementsToAnimate.forEach(elemen => {
    animateElements(elemen)
})