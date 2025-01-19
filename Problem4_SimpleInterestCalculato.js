function simpleInterest(P,R,T){
    if(P<0 ||R<0 ||T<0){
        console.log("Invalid input, all values must be non-negative.")
    }
    else{
    let si=(P*R*T)/100;
    console.log("The simple interest is: "+si.toFixed(1));
    }
}

simpleInterest(1000,5,3);
simpleInterest(1500,7,5);
simpleInterest(0,6,2);