function multiply_Numbers(a, b) {
    const multi = {
      multiply: function(x, y) {
        return x * y;
      }
    };
  
    return multi.multiply.apply(null, [a, b]);
  }
  
  
  let Answer = multiply_Numbers(11,17);
  console.log(Answer); 
  