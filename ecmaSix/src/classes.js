class newUser{
  constructor(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
    this.name = `${first_name} ${last_name}`
    this.sayHello();
  }
  sayHello() {
    console.log(`Hello my name is ${this.name}`)
  }
}
var newuser = new newUser('To be or', 'Not to be');
