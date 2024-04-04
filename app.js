const choices = document.querySelectorAll('.choices');
const userScore = document.querySelector('#u1s')
const compScore = document.querySelector('#u2s')
let u1s = userScore.innerText
let u2s = compScore.innerText


const getCompChoice = () => {
    const choices = ['rock','paper','scissors']
    const rand = Math.floor(Math.random()*3) 
    const compChoice = choices[rand]
    return compChoice;
}

const gameDraw = () => {
    const results = document.querySelector('.results')
    results.innerHTML = ''
    const h3 = document.createElement('h3')
    h3.className = 'result draw'
    
    h3.appendChild(document.createTextNode('The Game was Draw. Play Again!!'))
    results.appendChild(h3)
    console.log('draw');
}

const Win = () => {
    u1s++
    userScore.innerText = u1s;
    const results = document.querySelector('.results')
    results.innerHTML = ''
    const h3 = document.createElement('h3')
    h3.className = 'result win'
    h3.appendChild(document.createTextNode(`You WIN !! Your ${userChoice} beats ${compChoice}`))
    results.appendChild(h3)
    console.log('win');
}

const Lose = () => {
    u2s++
    compScore.innerText = u2s;
    const results = document.querySelector('.results')
    results.innerHTML = ''
    const h3 = document.createElement('h3')
    h3.className = 'result lose'
    
    h3.appendChild(document.createTextNode(`You lose !! ${compChoice} beats your ${userChoice}`))
    results.appendChild(h3)
    console.log('lose');
}





const playGame = (userChoice,compChoice) => {
    if(userChoice === compChoice) {
        gameDraw();
    }else {
        let userWin;
        if (userChoice == 'rock'){
            userWin = compChoice == 'scissors'? true : false; 
        } else if (userChoice == 'paper'){
            userWin = compChoice == 'rock' ? true : false ;
        } else if (userChoice == 'scissors') {
            userWin = compChoice == 'paper' ? true : false;
        }
        
        if(userWin){
            Win();
        }else{
            Lose();
        }
    }
    
    console.log(userChoice, compChoice, u1s, u2s);
}
// const playGame = (userChoice,compChoice) => {
//     if(userChoice === compChoice) {
//         gameDraw();
//     }else if(userChoice == 'rock') {
//         userWin = compChoice == 'scissors' ? true : false
//     }else if(userChoice == 'paper') {
//         userWin = compChoice == 'rock' ? true : false
//     }else if(userChoice == 'scissors') {
//         userWin = compChoice == 'paper' ? true : false
//     }

//     if(userWin){
//         userWin();
//     }else if(!userWin){
//         userLose();
//     }
// }

getCompChoice()

choices.forEach(item => {
    item.addEventListener('click' ,() => {
        userChoice = item.getAttribute('id')
        compChoice = getCompChoice()
        playGame(userChoice,compChoice)
    })
    
})