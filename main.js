window.onload = init;

// [card13, card23, card87]

const history = [];

function init() {
  const submitRequest = document.querySelector(".card-area");
  submitRequest.addEventListener("click", initialRequest, addToHistory);

  const prevBtn = document.querySelector("#prev");
  prevBtn.addEventListener("click", previous, previousRequest);

  const nxtBtn = document.querySelector("#nxt");
  nxtBtn.addEventListener("click", next, nextRequest);
}


function initialRequest() {
//   document
    // .querySelector(".card-area")
    // .removeEventListener("click", request, addToHistory);
//   setTimeout(function() {
    // document
    //   .querySelector(".card-area")
    //   .addEventListener("click", request, addToHistory);
//   }, 4000);
  const xhr = new XMLHttpRequest();
  const url = `https://api.magicthegathering.io/v1/cards/`;
  xhr.open("GET", url);
  xhr.onload = random;
  xhr.send();
}
function previousRequest() {
  event.prevenDefault();
  const xhr = new XMLHttpRequest();
  const url = `https://api.magicthegathering.io/v1/cards/`;
  xhr.open("GET", url);
  xhr.onload = prev;
  xhr.send();
}
function nextRequest() {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  const url = `https://api.magicthegathering.io/v1/cards/`;
  xhr.open("GET", url);
  xhr.onload = next;
  xhr.send();
}
// function parser() {
//   const deck = JSON.parse(event.target.responseText);
//   const { cards } = deck;
// }
function random(event) {
  const deck = JSON.parse(event.target.responseText);
  const { cards } = deck;
  const cardNumber = Math.floor(Math.random() * 100);
  const cardSelected = cards[cardNumber];
  console.log(deck);
  const cardSelectedImg = cardSelected.imageUrl;
  document.querySelector(".card-area").src = cardSelectedImg;
  listStats(cardSelected);
  addToHistory(cardNumber);
  console.log(history);
}

//add the card to history for cycle functions
function addToHistory(value) {
  return history.push(value);
}

//displays value of selected keys
function listStats(cardSelected) {
  const ul = document.querySelector(".stats");
  const statsWanted = {
    "Name:": cardSelected.name,
    "Type:": cardSelected.type,
    "Rarity:": cardSelected.rarity
  };
  const pairs = Object.entries(statsWanted);
  clearUl();

  for (let i = 0; i < pairs.length; i++) {
    const li = document.createElement("li");
    li.classList.add("list-style");
    li.innerText = `${pairs[i][0]} ${pairs[i][1]}`;
    ul.appendChild(li);
  }

  //clear the ul of its children
  function clearUl() {
    const ul = document.querySelector("ul");

    while (ul.hasChildNodes()) {
      ul.firstChild.remove();
    }
  }
}
//cycles forward to the next card
function next(event) {
  const deck = JSON.parse(event.target.responseText);
  const { cards } = deck;
  const cardNumber = Math.floor(Math.random() * 100);
  const cardSelected = cards[cardNumber];
  console.log(deck);

  const cardSelectedImg = cardSelected.imageUrl;
  document.querySelector(".card-area").src = cardSelectedImg;

  listStats(cardSelected);
  console.log(history);
  //find current cardNumber index
}
//cycles backwards to the previous card
function previous   (event) {
  const deck = JSON.parse(event.target.responseText);
  const { cards } = deck;

  const cardNumber = Math.floor(Math.random() * 100);
  const cardSelected = cards[cardNumber];
  console.log(deck);

  const cardSelectedImg = cardSelected.imageUrl;
  document.querySelector(".card-area").src = cardSelectedImg;

  listStats(cardSelected);
  console.log(history);
}
