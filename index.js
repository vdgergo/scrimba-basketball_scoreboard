let homeScoreEl = Number(document.getElementById("home-score").textContent)
let guestScoreEl = Number(document.getElementById("guest-score").textContent)


function add1pointToHome() {
  homeScoreEl += 1;
  document.getElementById("home-score").textContent = homeScoreEl
}

function add2pointToHome() {
  homeScoreEl += 2;
  document.getElementById("home-score").textContent = homeScoreEl
}

function add3pointToHome() {
  homeScoreEl += 3;
  document.getElementById("home-score").textContent = homeScoreEl
}


function add1pointToGuest() {
  guestScoreEl += 1;
  document.getElementById("guest-score").textContent = guestScoreEl
}

function add2pointToGuest() {
  guestScoreEl += 2;
  document.getElementById("guest-score").textContent = guestScoreEl
}

function add3pointToGuest() {
  guestScoreEl += 3;
  document.getElementById("guest-score").textContent = guestScoreEl
}

function resetState() {
  homeScoreEl = 0
  guestScoreEl = 0
  document.getElementById("home-score").textContent = homeScoreEl
  document.getElementById("guest-score").textContent = guestScoreEl
}