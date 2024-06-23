let gameSq = [];
let userSq = [];

let btns = ["yellow","red","purple","green"];
let h2 = document.querySelector("h2");
let started = false;
let level =0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started = true;
        levelUp();
    }

});
// extra comment
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSq = []; 
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random()*3); 
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSq.push(randcolor);
    console.log(gameSq);
   
    gameFlash(randbtn);
}

function checkAns(idx){

    if(userSq[idx]== gameSq[idx]){
        if(userSq.length == gameSq.length){
           setTimeout(levelUp,1000);
        }
    }else {
        h2.innerHTML = `Game Over ! your score is <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor= "white";

        }, 150);
        reset();
    }
}

function btnPress(){
    
    let btn = this;
    userFlash(btn); 
    
    let userColor = btn.getAttribute("id");
    userSq.push(userColor)
    
    checkAns(userSq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSq = [];
    userSq = [];
    level = 0;
}
 