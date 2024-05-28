let us=0
let cs=0

const c=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usp=document.querySelector("#user-score");
const csp=document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"]
    const i = Math.floor(Math.random()*3)
    return options[i]
};
const drawGame = () => {
    console.log("Game is draw !!");
    msg.innerText = "Game is draw !!";
    msg.style.backgroundColor = '#081b31';
};
const showWinner = (userWin,uc,cc) => {
    if (userWin){
        us++;
        usp.innerText=us;
        msg.innerText = `You win !! Your ${uc} beats  ${cc}`;
        msg.style.backgroundColor = "green";
    } else{
        cs++;
        csp.innerText=cs;
        msg.innerText = `You lose !! ${cc} beats your ${uc}`;
        msg.style.backgroundColor = "red";
    }
        
};
const playGame = (uc) => {
    // console.log("user choice =", uc);
    //Generate computer choice
    const cc = genCompChoice()
    // console.log("Comp choice = ",cc);
    if (uc == cc) {
        drawGame();
    }else{
        let userWin = true;
        if(uc === "rock")
        {
            userWin = cc === "paper" ? false : true;
        } else if(uc === "paper"){
            userWin = cc === "scissor" ? false : true;
        } else{
            userWin = cc === "rock" ? false : true;
        }
        showWinner(userWin,uc,cc);
    }
    
};
c.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const uc=choice.getAttribute("id")
        // console.log("choice was clicked ",uc);
        playGame(uc);
    });
});