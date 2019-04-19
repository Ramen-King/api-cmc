window.onload = init;

function init(){
    const submitRequest = document.querySelector('button');
    submitRequest.addEventListener('click', request);
}
function request(event){
    event.preventDefault();
   
    sendRequest();
}

function sendRequest(){  
    const xhr = new XMLHttpRequest()
    const url = `https://api.magicthegathering.io/v1/cards/`;
    xhr.open("GET", url);
    xhr.onload = handleData;
    xhr.send();
}

function handleData(event){
    const deck = JSON.parse(event.target.responseText);
    const { cards } = deck
    console.log(deck);
    console.log(cards[4].imageUrl)
}