function arrayToList(arr) {
    var list = null;
    for (let i=arr.length-1; i>=0; i--) {
      console.log('arr', i, list)
      list = { val: arr[i], rest: list }
      // first time: list = { val: 20, rest: null}
      // second time: list = { val: 10, rest: { val: 20, rest: null}}
    }

    return list;
}
  
arrayToList([10, 20]);

function listToArray(list) {
    let result = [];
    
    while(list) {
      result.push(list.value)
      list = list.rest
    }

    return result;
}

listToArray({ value: 10, rest: { value: 20, rest: { value: 30, rest: null } } });

function prepend(el, list) {
    return {
      value: el,
      rest: list
    }
}

let list = { value: 10, rest: { value: 20, rest: null } }
prepend(10, prepend(20, null))

function nth(list, number) {
    if (number > listToArray(list).length - 1) {
        return 'number exceeds length of list';
    }

    let target = 0;
    while (target < number) {
        list = list.rest
        target += 1
    }

    return list.value;
}