const grid = document.querySelector('.grid');

const characters = [
    'Katarina',
    "Ahri",
    "Daiurs",
    "Irelia",
    "Mf",
    "Reneko",
    "Syndra",
    "Lux",
    "Emu",
    "Garen",
    "Braum",
    'LB',
    "Akali",
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disableCards = document.querySelectorAll('.disable-card')

    if(disableCards.length === 26){
        alert("Parabéns,você está no Diamante do jogo do Memoria!!!")
    }
} 

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');


    if (firstCharacter === secondCharacter) {
        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {
        setTimeout(() =>{
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

             firstCard = '';
             secondCard = '';

        },  500)

    }
}






const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode;

    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode;

        checkCards();
    }

}

const createCeate = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../img/${character}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character)

    return card;
}


const LoadGame = () => {


    const duplicateCharactres = [...characters, ...characters];

    const shuffledArray = duplicateCharactres.sort(() => Math.random() - 0.5);


    shuffledArray.forEach((character) => {
        const card = createCeate(character);
        grid.appendChild(card);
    });
}
LoadGame();