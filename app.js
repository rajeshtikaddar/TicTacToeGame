let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetgame");
let newGamebtn = document.querySelector(".newgamebtn");
let msgContainer = document.querySelector(".msgcontainer");
let msg = document.querySelector(".msg");

let turnO = true; //playerO , playerO

const winPatterns =[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let count = 0;

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        count++;
        if(turnO){
            box.innerText = "O";
            box.style.color="red";
            turnO = false;
        }else{
            box.innerText = "X";
            box.style.color="black";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        if(count === 9){
            showDraw();
        }
        
        
    });
});

const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText =`Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const showDraw = () =>{
    msg.innerText =`Game Draw !`;
    count = 0;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        
        let pos1val =  boxes[pattern[0]].innerText;
        let pos2val =   boxes[pattern[1]].innerText;
        let pos3val =  boxes[pattern[2]].innerText;
        
        if(pos1val !=="" && pos2val !=="" && pos3val !=="" ){
            if(pos1val === pos2val && pos2val === pos3val ){
                showWinner(pos1val);
            }
        }
    }
};



const resetGame =() =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

resetBtn.addEventListener("click", resetGame);
newGamebtn.addEventListener("click", resetGame);