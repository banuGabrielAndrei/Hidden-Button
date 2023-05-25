let winnerNumber = Math.floor(Math.random() * 3) + 1
let buttons = document.getElementsByClassName("btn btn-outline-primary")

function checkWinnerButton() {
    for (let i = 0 ; i < buttons.length; ++i) {
        buttons[i].addEventListener('click', function(e) {
            if (buttons[i].id == winnerNumber) {
                buttons[i].innerHTML = "WINNER!"
                document.getElementById(i + 1).style.backgroundColor = 'green'
            } else {
                buttons[i].innerHTML = "TRY AGAIN !"
                document.getElementById(i + 1).style.backgroundColor = 'red'
            }
        })
    }
}
checkWinnerButton()



