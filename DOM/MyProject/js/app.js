seeMore.addEventListener("click", seeMoreContent);

function seeMoreContent(){
  let newContent = document.createElement("p");
  let text = document.createTextNode("This is the content that you have been looking for!");
  newContent.appendChild(text);
  this.parentElement.appendChild(newContent);
}

// var seeMore = document.getElementsById("seeMore");
// console.log(seeMore);
//
//
//
// // getElementByClassName returns an array of HTML object
// var pTags = document.getElementsByClassName("content");
// for (var i = 0; i < pTags.length; i++){
//   console.log(pTags[i]);
// }
//
//
// // getElementByTagName
// // get all the h1 tags
// var h1Tags = document.getElementByTagName("h1");
// for (var i = 0; i< h1Tags.length; i++){
//   console.log(h1Tags[i]);
// }
