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
  console.log(cards);

  //get a random card
  const cardNumber = Math.floor(Math.random() * 100);
  console.log(deck);
  const cardSelected = cards[cardNumber];

  const cardSelectedImg = cardSelected.imageUrl;
  //   newCard(cardSelected);
  document.querySelector(".card-area").src = cardSelectedImg;
  console.log(cardSelected);

  listStats(cardSelected);
}

function listStats(cardSelected) {
 
  const statsWanted = [cardSelected.name, cardSelected.type, cardSelected.rarity];
  const ul = document.querySelector('.stats');
  for (let i = 0; i < statsWanted.length; i++){
    const li = document.createElement('li');
      li.innerText = statsWanted[i];
      ul.appendChild(li);
  }
  while (request) {
    ul.removeChild()
  }

  
  
    // statNodes.innerText = cardSelected.statsWanted[i];
    // ul.appendChild(statNodes);
    // 
    // statNodes.innerText = cardSelected.colorIdentity;
    // ul.appendChild(statNodes);
    // 
    // statNodes.innerText = cardSelected.types;
    // ul.appendChild(statNodes);
    // 
    // statNodes.innerText = cardSelected.rarity;
    // ul.appendChild(statNodes);

}
