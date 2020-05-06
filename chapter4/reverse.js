function reverseArray(arr) {
    newArr = [];
  
    for(let i=0; i<arr.length; i++) {
      newArr.unshift(arr[i])
    }

    return newArr;
}

reverseArray(['a', 'b', 'c']);

function reverseInPlace(arr) {
    for (let i=0; i<Math.floor(arr.length/2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }

    return arr;
}
  
  reverseInPlace([1,2,3,4,5])