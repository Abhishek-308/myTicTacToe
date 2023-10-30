console.log("Wlcome to myTicTacToe");
let music = new Audio("win.wav");
let audioTurn = new Audio("click.wav");
let gameOver = new Audio("lost.mp3");
let turn = "❌"
let isGameOver = false
//Function to change the turn
const changeTurn = () => {
    return turn === "❌" ? "⭕" : "❌"
}
//function to check for a win

const checkWin = () => {
    let boxText = document.getElementsByClassName('boxText')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + "Won"
            isGameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "100px"

        }
    })
}


//Game logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText')
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn
            turn = changeTurn();
            audioTurn.play()
            checkWin()
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn

            }
        }
    })


})

// reset all the box

reset.addEventListener('click',()=>{
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element=>{
        element.innerText=""
    });
    turn = "❌"
    isGameOver=false
    document.getElementsByClassName("info")[0].innerText="Turn for"+turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0"

})