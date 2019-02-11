for ( let x = 1; x <= 100; x++ ) {
  if ( (x % 3 == 0) && (x % 5 == 0) ) {
    console.log( "FizzBuzz" );
    continue;
  } else if ( x % 3 == 0 ) {
    console.log( "Fizz" );
    continue;
  } else if ( x % 5 == 0 ) {
    console.log( "Buzz" );
    continue;
  }
  console.log( x );
}
