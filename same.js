//Write a fuction called same , which accepts two arrays. 
//The function should return true if every value in the array has its corresponding value suared in the second array. The frequency of values must be the same.

function same(a, b) {
    //loop through both arrays
    var c = [];
    for(var i=0;i<=a.length;i++) {
        for(var j=0;j<=b.length;j++) {
            //check if first element in a[] is squared in 2nd array
           // check with each index with index of 2nd array

            if(a[i]*a[i] === b[j]) {
               c.push(true); 
            }
        }
    }
    console.log(c);
    if(c.length === a.length){
        console.log(true);
    } else {
         console.log(false)
    }
}
same([1,2,3], [9,4,1]);