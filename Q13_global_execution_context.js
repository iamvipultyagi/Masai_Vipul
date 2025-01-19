
let age = 30; 

function displayAge() {
  console.log("Age in displayAge:", age); 
}

function changeAge() {
  age = 35;
  console.log("Age in changeAge after update:", age);
}

displayAge(); 
changeAge(); 
displayAge(); 