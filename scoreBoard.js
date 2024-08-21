function checkWinner() {
    let team1Score = parseInt(document.getElementById('team1Score').value);
    let team2Score = parseInt(document.getElementById('team2Score').value);
    let result = document.getElementById('result');

    if (team1Score >= 21 && team1Score - team2Score >= 2 && team1Score > team2Score) {
        result.innerHTML = "Team 1 Wins!";
    } else if (team2Score >= 21 && team2Score - team1Score >= 2 && team2Score > team1Score) {
        result.innerHTML = "Team 2 Wins!";
    } else if (team1Score >= 20 && team2Score >= 20) {
        if (team1Score - team2Score === 2) {
            result.innerHTML = "Team 1 Wins!";
        } else if (team2Score - team1Score === 2) {
            result.innerHTML = "Team 2 Wins!";
        } else {
            result.innerHTML = "Game continues...";
        }
    } else {
        result.innerHTML = "Game continues...";
    }
}
