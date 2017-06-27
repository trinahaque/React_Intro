class Dom{
  constructor(defaultColor, secondaryColor){
    this.element = document.createElement("div");
    this.defaultColor = defaultColor;
    this.secondaryColor = secondaryColor;

    this.element.addEventListener("click", function addClickEvent(){
      alert("the div has been clicked");
    )}
  }
}
  // addStyle() => {
  //
  // }
  // addHoverInEvent() => {
  //
  // }
  // addHoverOutEvent() => {
  //
  // }
  // addToHtmlBody() => {
  //
  // }

// new Dom("pink", "blue");
