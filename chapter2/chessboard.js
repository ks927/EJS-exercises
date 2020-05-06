let board = ''
let width = 8;
let height = 8;
// vertical
for (let i=0; i < height; i++) {
    if (i > 0) {
        board += '\n'
    }
    // horizontal
    for (let j=0; j < width; j++) {
        if ((i+j) % 2 === 0) {
            board += ' '
        } else {
            board += '#'
        }
    }
}

console.log(board)