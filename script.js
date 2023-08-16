let human = -1;
let rest="";
let rockB = document.getElementById("rock");
let paperB = document.getElementById("paper");
let scissorB = document.getElementById("scissor");
let res1 = document.querySelector(".res1");
let res2 = document.querySelector(".res2");
let res = document.querySelector(".res");
let reset = document.querySelector("#reset-btn");
let autoplay = document.querySelector("#autoplay");
    score={
        win : 0,
        lose : 0,
        draw : 0
    };

rockB.addEventListener("click",function(e){
   human=0;  //rock==0 
   updateResult()
})

 paperB.addEventListener("click",function(e){
    human=1;  //paper==1
    updateResult()
})

scissorB.addEventListener("click",function(e){
    human=2;  //scissor==2
    updateResult()
})

document.body.addEventListener('keydown',(event)=>{
    if(event.key==="r"){
        human=0;
    }
    if(event.key==="p"){
        human=1;
    }
    if(event.key==="s"){
        human=2;
    }
    updateResult();
})

reset.addEventListener("click",function(e){
    res.textContent="";
    res1.textContent="";
    res2.textContent="";
    score.win=0;
    score.lose=0;
    score.draw=0;
})

let intervalId;
let isAutoPlaying=false;
autoplay.addEventListener("click",function(){
if(!isAutoPlaying){
    intervalId = setInterval(function(){
        human=Math.floor(Math.random()*3);
        updateResult();
    },1000);
    isAutoPlaying=true;
    autoplay.textContent="Stop";
}
else{
    clearInterval(intervalId);
    isAutoPlaying=false;
    autoplay.textContent="Auto Play";
}
})

function computerMove(){

    let computer = Math.floor(Math.random()*3);
    if(human===computer){
        score.draw+=1;
        rest="It's A Draw, Try Again"
    }
    else if((human===0 && computer===2 ) || (human===1 && computer===0) || (human===2 && computer===1)){
        score.win+=1;
        rest="It's A Win 🥳 "
    }
    else{
        score.lose+=1;
        rest="You Lost 😢"
    }

    return computer;
}

function updateSymbol(player){
    if(player==0){
        return "✊"
    }
    else if(player==1){
        return "🖐"
    }
    else{
        return "✌️"
    }
}

function updateResult(){
    let comp = computerMove();
    res1.textContent = `You picked ${updateSymbol(human)}, while computer picked ${updateSymbol(comp)}`
    res.textContent=`${rest}`
    res2.textContent = `Score :-   Wins : ${score.win} ,  Lost : ${score.lose} , Draws : ${score.draw}`
}
