window.onload = init;

function init() {
  const submitRequest = document.querySelector(".card-area");
  submitRequest.addEventListener("click", request);
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

  //get a random card
  const cardNumber = Math.floor(Math.random() * 100);
  console.log(deck);

  const cardSelected = cards[cardNumber].imageUrl;
//   newCard(cardSelected);
document.querySelector(".card-area").src = `${cardSelected}`;

}
