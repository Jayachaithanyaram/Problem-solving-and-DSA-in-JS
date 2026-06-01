function area(l,w){
    if(l<=0){
        throw new RangeError("length should be positive")
    }
     if(w<=0){
        throw new RangeError("width should be positive")
    }
    let area = l*w;
    console.log(area);
}
area(3,4);
area(9,5);
area(-23,52);