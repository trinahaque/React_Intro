// backticks

class User{
  constructor(name){
    this.name = name;
    this.printName();
  }
  printName(){
    console.log(this.name);
  }
}
// var user = new User("Trina");


// Arrow Function

function NewPerson(){
  this.age = 0;
  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}
// var newperson = new NewPerson();



// functions with default values
function createUser(first_name = "haha", last_name= "nana", age=21){
  this.first_name = first_name;
  this.last_name = last_name;
  this.age = age;
  var printUser = () => {
    console.log(`this is ${this.first_name} ${this.last_name} who is ${this.age} years old`);
  }
  return printUser();
}

// var user = new createUser();


class UserCreate{
  constructor(first_name = "haha", last_name= "nana", age=21){
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;

    // doing this vs this.method()
    var printUser = () => {
      console.log(`this is ${this.first_name} ${this.last_name} who is ${this.age} years old`);
    }
    return printerUser();
  }
}
// var user = new createUser("Anni", "Nanni", 28);


let arr = [10, 11, 9, 6];
arr = arr.map(v => console.log(v));
