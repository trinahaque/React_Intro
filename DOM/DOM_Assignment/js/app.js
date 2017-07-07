let contentArray = [
  "This is some content that will be seen using javascript",
  "Also some content, that we will be adding to our ul tag",
  "Lorem  jksdhfkjsdhfjkdsgjkdsgjdfhsgjk",
  "kjsadhfkjsdgjsdbgkjdsbgkjbsdgjkbdgjkbdksfjgb"
]
// You will for loop through that array and append the text at each index to an empty list item
// <li></li> and then append that list item to the unordered list.
// moreContent.addEventListener("click", moreContent);

function ulContent(moreContent){
  let newContent = document.createElement("li");
  for (var i = 0; i < contentArray.length; i++){
    let text = document.createTextNode(contentArray[i]);
    newContent.appendChild(text);
    // this.parentElement.appendChild(newContent);
    moreContent.appendChild(newContent);
  }
}
