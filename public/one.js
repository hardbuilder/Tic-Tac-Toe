let trun = "X";
let x = [];
let o = [];
var myAudio = new Audio('/click.mp3');
var hover = new Audio('/hover.mp3');
let boxes = document.querySelectorAll(".cell");
for (let box of boxes) {
    box.addEventListener("mouseenter",function (){
        hover.currentTime = 0;
        hover.play();
    });
    box.addEventListener("click", function () {
        myAudio.play();
        let boxtext = box.querySelector(".boxtext");
        if(boxtext.innerHTML == ''){
            box.style.backgroundColor = "rgba(42, 73, 134, 0.359)";
            boxtext.innerHTML = trun;
            if (trun == "X") {
                box.style.border = "solid orange";
                x.push(Number(box.id));  
            }
            if(trun == 'O'){
                box.style.border = "solid grey";
                o.push(Number(box.id));
            }
            changeturn();

        }
        if(checkwin(x)){
            let h3 = document.querySelector("h3");
            h3.innerHTML = "X wins! new round in 5 seconds!";
            setTimeout(reset,5000);
        }
        if(checkwin(o)){
            let h3 = document.querySelector("h3");
            h3.innerHTML = "O wins! new round in 5 seconds!";
            setTimeout(reset,5000);
        }
    });
  }
  function checkwin(arr) {
    const win_patterns = [
        [1,2,3], [4,5,6], [7,8,9],
        [1,4,7], [2,5,8], [3,6,9],
        [1,5,9], [3,5,7]
    ];
    for(let p of win_patterns){
        count=0;
        for(let  i = 0;i<3;i++){
            if(arr.includes(p[i])){
                count++;
            }
        }
        if(count == 3){
            return true;
        }
    }
    return false;
}


function changeturn(){
    if(trun == "X"){
        trun = "O";
    }
    else{
        trun = "X";
    }
}
let restartBtn = document.querySelector("button");
function reset () {
    for (let box of boxes) {
        box.style.border = "";
        let h3 = document.querySelector("h3");
        h3.innerHTML = "";
        box.querySelector(".boxtext").innerHTML = "";
        box.style.backgroundColor = "";
        box.style.pointerEvents = "auto";
    }
    x = [];
    o = [];
    trun = "X";
}

restartBtn.addEventListener("click",reset);
