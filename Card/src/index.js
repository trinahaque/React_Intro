import "./index.css";
import Card from "./Components/Card/Card.js";
let cards = document.getElementById("cards");

for (var i = 0; i < 6; i++){
  cards.appendChild(Card());
}
