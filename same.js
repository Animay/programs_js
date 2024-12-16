function same(a, b) {
    //loop through both arrays
    var c = [];
    for(var i=0;i<=a.length;i++) {
        for(var j=0;j<=b.length;j++) {
            //check if first element in a[] is squared in 2nd array
           // check with each index with index of 2nd array

            if(a[i]*a[i] === b[j]) {
               c.push(true); 
            } else {
            //   c.push(false); 
            }
        }
    }
    console.log(c);
    if((c.length === a.length) && (b.length === a.length)){
        console.log(true);
    } else {
         console.log(false)
    }
}
same([1,2,3], [9,4,1]);