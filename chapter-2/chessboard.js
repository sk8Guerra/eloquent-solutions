let board = "";
for ( let y = 0; y < 8; y++ ) {
  for ( let x = 0; x < 8; x++ ) {
    if ( ( x + y ) % 2 == 0 ) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
