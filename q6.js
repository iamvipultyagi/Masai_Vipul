function patten(n){
    let temp=""
    for(let i=0;i<n-1;i++){
        temp = ' '.repeat(n - i -2);
        let stars = '*'.repeat(2 * (i) + 1);
        console.log(temp + stars);
    }
    temp = ' '.repeat(n  -2)+"|";
    console.log(temp)
}
patten(5);
