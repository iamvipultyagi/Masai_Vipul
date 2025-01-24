function Person(name, age) {
    this.name = name;
    this.age = age;
  
    this.displayInfo = function() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
  }

const First_person = new Person("Vipul", 22);
const display = First_person.displayInfo.bind(First_person);

display();

  