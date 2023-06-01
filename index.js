let winnerNumber = Math.floor(Math.random() * 3) + 1;
let buttons = document.getElementsByClassName("btns");

function buttonsSetup() {
    for (let i = 0; i < buttons.length; ++i) {
        buttons[i].addEventListener('click', checkWinnerButton);
    }
}

let nrOfBtns;
let secondWinnerNumber;
let newBtns = [];
function generateButtons() {
    removeButtons();
    nrOfBtns = document.getElementById("nrOfButtons").value;
    secondWinnerNumber = Math.floor(Math.random() * nrOfBtns) + 1;
    for (let i = 0; i < nrOfBtns; ++i) {
        newBtns[i] = document.createElement('button');
        newBtns[i].id = "btn" + (i + 1);
        newBtns[i].innerHTML = "??";
        newBtns[i].className = "btns1";
        document.getElementById("generatedButtons").appendChild(newBtns[i]);
        newBtns[i].addEventListener('click', checkWinnerButton);
    }
}

function removeButtons() {
    for (let i = 0; i < newBtns.length; ++i) {
        newBtns[i].remove();
    }
    newBtns = [];
}

function checkWinnerButton(e) {
    if (e.target.id == winnerNumber) {
        e.target.innerHTML = "Winner";
        e.target.style.backgroundColor = "green";
    } else if (e.target.id == 'btn' + secondWinnerNumber){
        e.target.innerHTML = "Winner";
        e.target.style.backgroundColor = "green";
    } else {
        e.target.innerHTML = "Loser";
        e.target.style.backgroundColor = "red";
    }
}

buttonsSetup();

           







