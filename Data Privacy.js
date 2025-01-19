let createCounter = () => {
    let cnt = 0;
    let method = {
      increment : function(){
        cnt += 1;
        return cnt;
      },
      getCount : function(){
        return cnt;
      }
    }
    return method;
  }
const counter = createCounter();
console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.getCount());  
  