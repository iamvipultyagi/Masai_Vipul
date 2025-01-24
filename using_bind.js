function Greet(person) {
    const greet = function() {
      console.log(`Hello, ${this.name}`);
    }.bind(person); 
    setTimeout(greet, 2000); 
}

const Name = { name: "Vipul" };
Greet(Name);
  
