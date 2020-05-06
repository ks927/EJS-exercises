// loop
function every(arr, test) {
    for (let i=0; i<arr.length; i++) {
        if(!test(arr[i])) {
            return false;
        }
    }
    return true;
}

// some
function every(arr, test) {
    for (let i=0; i<arr.length; i++) {
        var checkArr = [arr[i]];
        
        if (!checkArr.some(test)) {
            return false;
        }
    }
    return true;
}
  
  console.log(every([1,2,16], n => n < 10));