const user = ["Rock","Paper", "Scissors"];
var idx = Math.floor(Math.random()*3);
var res= document.querySelector("#res");
console.log(idx);
var choice;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click",()=>{
    game(user[0]);
    compcolor();
    buttonshow();
    paper.disabled="true";
    scissors.disabled="true";
},{once:true});

paper.addEventListener("click",()=>{
    game(user[1]);
    compcolor();
    buttonshow();
    rock.disabled="true";
    scissors.disabled="true";
},{once:true});

scissors.addEventListener("click",()=>{
    game(user[2]);
    compcolor();
    buttonshow();
    paper.disabled="true";
    rock.disabled="true";
},{once:true});

function compcolor(){
    var rockM= document.querySelector("#rockM");
    var paperM= document.querySelector("#paperM");
    var scissorsM= document.querySelector("#scissorsM");
    if(idx===0){
        rockM.style.border="5px solid black";
        paperM.style.animation="none";
        scissorsM.style.animation="none";
    }
    else if(idx===1){
        paperM.style.border="5px solid black";
        rockM.style.animation="none";
        scissorsM.style.animation="none";
    }
    else{
        scissorsM.style.border="5px solid black";
        paperM.style.animation="none";
        rockM.style.animation="none";
    }
};

function buttonshow(){
    var butt = document.querySelector("#reset");
    butt.style.visibility="visible";
};

function game(choice){
    if(choice===user[idx]){
        res.innerText="Draw";
        res.style.color="brown";
    }
    else if(choice==="Rock"&&idx!=0){
       if(idx==1){
        res.innerText="You lose";
        res.style.color="red";
       }
       else{
        res.innerText="You won";
        res.style.color="green";
       }
    }
    else if(choice==="Paper"&&idx!=1){
        if(idx==0){
            res.innerText="You won";
            res.style.color="green";
        }
        else{
            res.innerText="You lose";
            res.style.color="red";
        }
     }
     else{
        if(idx==1){
            res.innerText="You won";
            res.style.color="green";
        }
        else{
            res.innerText="You lose";
            res.style.color="red";
        }
     }
};