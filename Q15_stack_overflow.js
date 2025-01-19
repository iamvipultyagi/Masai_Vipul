function factorial(n) {
    if (typeof n !== 'number') {
      console.log("Invalid input: Input must be a number.");
      return null;
    }
    if (n < 0) {
      console.log("Invalid input: Factorial is not defined for negative numbers.");
      return null;
    }
    if (n === 0) {
      return 1;
    }
    if (n > 1000) { 
      console.log("Warning: Potential stack overflow risk. Calculation might be inaccurate for large numbers.");
    }
    return n * factorial(n - 1); 
  }
  
  console.log(factorial(5)); 
  console.log(factorial(0)); 
  console.log(factorial(-2)); 
  console.log(factorial("hello")); 
  console.log(factorial(1000));