function deepEqual(obj, obj2) {
    let trueOrFalse = true;
    
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] !== typeof obj2[key]) {
        trueOrFalse = false;
      } else if (typeof obj[key] === 'object') {
        deepEqual(obj[key], obj2[key])
      } else if (obj[key] !== obj2[key]) {
        trueOrFalse = false;
      } else {
        trueOrFalse = true;
      }
    });

    return trueOrFalse;
}

let obj = {here: {is: "an"}, object: 2};
deepEqual(obj, {here: {is: "an"}, object: 2})