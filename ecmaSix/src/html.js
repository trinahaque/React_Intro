function parentFunction(name){
  this.name = name;
  let h1 = document.createElement("h1")
  h1.innerText = "Random Name";
  document.body.appendChild(h1);
  h1.addEventListener("click", e => {
    h1.innerText = this.name;
  })
}
