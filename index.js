let userScore= 0;
let compScore = 0;
let msg = document.querySelector('#msg');
let user1 = document.querySelector('#userscore');
let comp1 = document.querySelector('#compscore');

const gencompscore = () =>{
    const options = ['rock','paper','scissors'];
     const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawgame = () =>{
    console.log('Game was draw');
    msg.innerText = 'Game was Draw. Play Again!';
    msg.style.backgroundColor = '#081b31'
}
const playgame = (userId) =>{
    console.log('User choice is' , userId);
    const compchoice = gencompscore();
    console.log('Comp choice is', compchoice);
    if(userId === compchoice){
        drawgame();
    }else{
        let userWin = true;
       if(userId === 'rock'){
          userWin = compchoice === 'paper'? false : true;
       }else if(userId === 'paper'){
          userWin = compchoice === 'scissors'? false : true;
       }else{
        userWin = compchoice === 'rock'? false : true;
       }
       showWinner(userWin , compchoice , userId);
    }
}
const showWinner = (userWin, compchoice , userId) =>{
   if(userWin){
    userScore++;
    user1.innerText = userScore;
    msg.innerText = `You Win. Your ${userId} beats ${compchoice}`;
    msg.style.backgroundColor = 'green'
   }else{ 
    compScore++;
    comp1.innerText = compScore;
    msg.innerText = `You Lose. ${compchoice} beats your ${userId}`;
    msg.style.backgroundColor = 'red'
   }
};
let choices = document.querySelectorAll('.choice');
choices.forEach((choice) =>{
    choice.addEventListener('click', () =>{
        const userId = choice.getAttribute('id')
        playgame(userId);
    })
})


