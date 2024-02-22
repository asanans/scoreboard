let homeScore = 0;
let guestScore = 0;

let homeEl = document.getElementById("home");
let guestEl = document.getElementById("guest");

function increaseHomeScoreBy1() {
    homeScore += 1;
    homeEl.textContent = homeScore;
};

function increaseHomeScoreBy2() {
    homeScore += 2;
    homeEl.textContent = homeScore;
};

function increaseHomeScoreBy3() {
    homeScore += 3;
    homeEl.textContent = homeScore;
};

function increaseGuestScoreBy1() {
    guestScore += 1;
    guestEl.textContent = guestScore;
};

function increaseGuestScoreBy2() {
    guestScore += 2;
    guestEl.textContent = guestScore;
};

function increaseGuestScoreBy3() {
    guestScore += 3;
    guestEl.textContent = guestScore;
};

function newGame() {
    guestScore = 0;
    homeScore = 0;
    guestEl.textContent = guestScore;
    homeEl.textContent = homeScore;
};