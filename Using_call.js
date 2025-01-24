const person = {
    name: "Vipul",
    age: 22
};
function Main() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

Main.call(person);

  