window.onload = init;

let history = [];

function init() {
  const submitRequest = document.querySelector(".card-area");
  submitRequest.addEventListener("click", request);

  const prevBtn = document.querySelector("#prev");
  prevBtn.addEventListener("click", previous);

  const nxtBtn = document.querySelector("#nxt");
  nxtBtn.addEventListener("click", next);
}
function request(event) {
  event.preventDefault();

  sendRequest();
}

function sendRequest() {
  const xhr = new XMLHttpRequest();
  const url = `https://api.magicthegathering.io/v1/cards/`;
  xhr.open("GET", url);
  xhr.onload = handleData;
  xhr.send();
}
function handleData(event) {
  const deck = JSON.parse(event.target.responseText);
  const { cards } = deck;
  console.log(cards);

  //get a random card

  const cardNumber = Math.floor(Math.random() * 100);
  const cardSelected = cards[cardNumber];

  history.push(cardNumber);

  const cardSelectedImg = cardSelected.imageUrl;
  document.querySelector(".card-area").src = cardSelectedImg;

  listStats(cardSelected);
}

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

  function clearUl() {
    const ul = document.querySelector("ul");

    while (ul.hasChildNodes()) {
      ul.firstChild.remove();
    }
  }
}

function next(event, currentCard) {
  event.preventDefault();
  //find current cardNumber index
  const nextIndex = history.indexOf(currentCard) + 1;
  currentCard = history[nextIndex];
  sendRequest()
}

function previous(event, currentCard) {
  event.preventDefault();
  const previousIndex = history.indexOf(currentCard) - 1;
  currentCard = history[previousIndex];
  sendRequest()
} 

