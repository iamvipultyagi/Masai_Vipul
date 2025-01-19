function brick(n,m){
    for(let i=1;i<=n/2;i++){
        let temp1= "[] ".repeat(m);
        let temp2= " []".repeat(m);
        
        console.log(temp1);
        console.log(temp2);    
    }
}
brick(4,5)