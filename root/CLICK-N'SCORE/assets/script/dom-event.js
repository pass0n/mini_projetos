const team1 = document.querySelector(".team-1");
const scoreTeam1 = document.querySelector(".score-1");
const team2 = document.querySelector(".team-2");
const scoreTeam2 = document.querySelector(".score-2");

const incrementScore = (scoreElement) => {
    let score = parseInt(scoreElement.innerHTML);
    score += 1;
    scoreElement.innerHTML = score;
}

team1.addEventListener("click", () => {
    incrementScore(scoreTeam1);
});

team2.addEventListener("click", () => {
    incrementScore(scoreTeam2);
});
