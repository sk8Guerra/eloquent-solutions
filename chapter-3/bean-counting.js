const countBs = string => {
  let counter = 0;
  for (const value of string) {
    if ( "B" === value) {
      counter++;
    }
  }
  return counter;
}

const countChar = ( string, letter ) => {
  let counter = 0;
  for (const value of string) {
    if ( letter === value) {
      counter++;
    }
  }
  return counter;
}

console.log( countBs( "BKBDBEKGHFDBDIWHJFBGFYDBDB" ) );
console.log( countChar( "feofhfnsl", "f" ) );
