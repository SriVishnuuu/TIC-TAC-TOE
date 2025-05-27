let btns = document.querySelectorAll(".boxes");
let reset_btn = document.querySelector(".reset");
let win = document.querySelector(".winner");
let newGame = document.getElementById("new_game");
let restart = document.querySelector(".restart");

let count = 0;

const winPatterns = [
    [0,1,2], 
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]  
];

let current_player = 'X';

btns.forEach((btn)=>{
    btn.addEventListener("click",clicked)
})

function changePlayer(){
    current_player = current_player=='X'? 'O' : 'X';
    win_Player = current_player == 'X' ? 'O' : 'X';
}

function clicked(){
    if(this.textContent == ''){
        this.textContent=current_player;
        changePlayer();
        count++;
    }
    
    checkPatterns();
    if(count == 9 && !checkPatterns() ){
        console.log("draw");
        win.innerHTML = "THE GAME IS DRAWN" ;
        restart.setAttribute("style","display:block");
    } 
}

function draw(btn){
    return btn.innerHTML != " ";
}

function checkPatterns(){
    let count=0;
    while(count<winPatterns.length){
        let val1 = btns[winPatterns[count][0]].innerHTML;
        let val2 = btns[winPatterns[count][1]].innerHTML;
        let val3 = btns[winPatterns[count][2]].innerHTML;

            if(val1 !='' && val2!='' && val3 !=''){
                if(val1 == val2 && val2 == val3){
                win.innerHTML = `WINNER IS ${win_Player}` ;
                restart.setAttribute("style","display:block");
                }
            }
            
        count++;
    }
    
}

reset_btn.addEventListener("click",resetGame);
newGame.addEventListener("click",restartGame);

function resetGame(){
    btns.forEach((btn)=>{
        btn.innerHTML = "";
    })
    count = 0;
}

function restartGame(){
    btns.forEach((btn)=>{
        btn.innerHTML = "" ;
    })
    restart.style.display = 'none';
    count = 0;
}


