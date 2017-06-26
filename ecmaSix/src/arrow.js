function parentFunction(name){
  this.name = name;
  var childFunction = () => { console.log(this.name)}
  return childFunction();
}

var oscar = new parentFunction("oscar");


let arr = [1,3,4,6,7];
arr = arr.map(v => v*2);
console.log(arr);
