function countBs(str) {
let count = 0;

for (let i=0; i<str.length; i++) {
    if (str[i] === 'B') {
        count++;
    }
}

return count;
}
  
countBs('BBC');

function countChars(str, char) {
    let count = 0;
  
    for (let i=0; i<str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
  
    return count;
}
  
countChars('kakkerlak', 'k');