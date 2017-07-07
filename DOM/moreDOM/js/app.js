function createText(key, content, div){
  console.log("The key is", key);
  console.log("The content is", content);
  console.log("The div is", div);
  if (typeof content == 'object' || typeof content == 'function' !! !(isNaN(key))){
    return;
  }
  let p = document.createElement("p");
  p.innerText = `${key}: ${content}`;
  if (content != ""){
    p.style.color = "green";
  }
  div.appendChild(p);
}


propButton.addEventListener("click", showProperties);
function showProperties(){
  mainDiv.innerHTML = "";
  createText("innerHTML", dummyText.innerHTML, mainDiv);
  createText("outerHTML", dummyText.outerHTML, mainDiv);
  createText("id", dummyText.id, mainDiv);
  createText("hidden", dummyText.hidden, mainDiv);
}


styleButton.addEventListener("mouseenter", addStyles);
styleButton.addEventListener("mouseleave", removeStyles);

function addStyles(){
  dummyText.style.color = "#474c4f";
  dummyText.style.border = "1px solid black";
  dummyText.style.fontSize = "35px";
  dummyText.style.backgroundColor = "blue";
}


function removeStyles(){
  dummyText.removeAttribute("style");
}
