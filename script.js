const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const launchButton = document.querySelector('#launch')
const startParagraph = document.querySelector('p');
const inputValue = document.querySelector('input')
const indicationLabel = document.querySelector('#indications')
const tentativeCounter = document.querySelector('#tentative-counter') 
let tentativeNumber = 1;
let count = 0;
let randomNumber = getRandomNumber();




startButton.addEventListener('click', () => {
    startGame();

    
})  

function startGame() {
    startParagraph.innerHTML = "la partie à démarrer !"

    launchButton.addEventListener('click', () => {
        if (inputValue.value == randomNumber) {
            return indicationLabel.innerHTML = 'Vous avez gagné !'
        } 
        
        if (inputValue.value < randomNumber) {
            tentativecount()
            return indicationLabel.innerHTML = 'Chiffre trop bas !'
        }
        tentativecount()
        return indicationLabel.innerHTML = 'Chiffre trop élevé !'
    })
}

function stopGame() {
    startParagraph.innerHTML = 'Appuis sur sur start pour commencer la partie bonne chance !'
    indicationLabel.innerHTML = 'Je vais penser a un nombre de 1 à 100, propose moi un nombre.'
    randomNumber = getRandomNumber();
    tentativeNumber = 1;
    tentativeCounter.innerHTML = 0;
    inputValue.value = ''
}

function getRandomNumber() {
    min = Math.ceil(0);
    max = Math.floor(100);
    return Math.floor(Math.random() * (100 - 0 + 1));
  }

function tentativecount() {
    count++
    tentativeNumber++
    tentativeCounter.innerHTML = count
}

stopButton.addEventListener('click', () => {
    stopGame();
})



