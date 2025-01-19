function areaOfTriangle(base,height){
    if(base<0 || height<0)
    console.log("Invalid number, base and height must be positive numbers.")

    else{
    let Area=(base*height)/2;
    console.log("The area of the triangle is: "+ Area.toFixed(1));

    }
}
areaOfTriangle(10,5);
areaOfTriangle(0,15);
areaOfTriangle(8,0);



