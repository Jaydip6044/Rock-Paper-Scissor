let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#userScore");
let compScorePara=document.querySelector("#compScore");


const genCompChoice = () =>{
   const options = ["rock" , "paper" , "scissors"];
   const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame = () =>{
    msg.innerText="Game was Draw , Play Again!";
    msg.style.backgroundColor="blue";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win , Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose , ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame=(userChoice) =>{
    console.log("user choice =" , userChoice);
    //generate computer Choice
    const compChoice=genCompChoice();
    console.log("Comp choice=",compChoice); 

    if(userChoice === compChoice){
        // Game was draw
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //compChoice was paper,scissor
            userWin= compChoice==="paper" ? false : true ;
        }else if(userChoice==="paper"){
            //compChoice was rock , scissor
            userWin= compChoice==="scissors" ? false : true ;
        }else{
            //compChoice was rock,paper
            userWin= compChoice==="rock" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click" , ()  => {
        const userChoice=choice.getAttribute("id");
     console.log("choice was clicked",userChoice);
     playgame(userChoice);
    });
});

