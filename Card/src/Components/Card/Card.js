import "./Card.css";
import card from "./Card.html";

class Card {
  constructor(){
    this.ele = document.createRange().createContextualFragment(card);
    // creates some HTML based off the card string
    this.buttonEvent();
    return this.ele;
  }
  buttonEvent(){
    this.ele.getElementById("mainButton").addEventListener("click", e => {
      console.log("I am clicking on the buttone");
    })
  }
}

export default function(){
  return new Card();
}
