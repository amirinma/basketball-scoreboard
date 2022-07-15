// javascript
let home = "home"
let guest = "guest"
let homeScore = 0
let guestScore = 0

let homeScoreCount = document.getElementById("game-score-home")
let guestScoreCount = document.getElementById("game-score-guest")
let winnerTeam = document.getElementById("winner")

function addOne(event){
    if (event !== "home"){
        guestScore += 1
        guestScoreCount.textContent = guestScore
    } else {
        homeScore += 1
        homeScoreCount.textContent = homeScore
    }
}

function addTwo(event){
    if (event !== "home"){
        guestScore += 2
        guestScoreCount.textContent = guestScore
    } else {
        homeScore += 2
        homeScoreCount.textContent = homeScore
    }
}

function addThree(event){
    if (event !== "home"){
        guestScore += 3
        guestScoreCount.textContent = guestScore
    } else {
        homeScore += 3
        homeScoreCount.textContent = homeScore
    }
}
function newGame(){
    guestScore = 0;
    homeScore = 0;
    guestScoreCount.textContent = guestScore;
    homeScoreCount.textContent = homeScore;
}

function winner(){
    if (guestScore > homeScore){
        winnerTeam.textContent = "WINNER IS GUEST"
    }else{
        winnerTeam.textContent = "WINNER IS HOME"
    } 
}
