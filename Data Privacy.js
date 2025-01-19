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

// git commit -m "Initial commit"


// git remote add origin https://github.com/iamvipultyagi/Masai_Vipul.git
// git branch -M main
// git push -u origin main
// git pull origin main
// git push origin main --force
  