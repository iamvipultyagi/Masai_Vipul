function discountPriceCalculator(price){
    if(price<0){
        console.log("Invalid price, the price must be a non-negative number.");
    }
    else{
    if(price>20){
        let discount=price/10;
        price=price-discount;
    }
    }
    console.log("The final price of the item is: "+price.toFixed(1));
    
}

discountPriceCalculator(25);
discountPriceCalculator(20);
discountPriceCalculator(15);
