/*jshint esversion: 6 */
function fib(n){
  function nacci(n){
    let a = 0;
    let b = 1;
    let f = 1;
    n += 1;
    for(let i = 2; i <= n; i++){
      f = a + b;
      a = b;
      b = f;
    }
    console.log(f);
    return f;
  }
  return nacci;
}

let fibCounter = fib();
fibCounter(0);
fibCounter(1);
fibCounter(2);
fibCounter(3);
fibCounter(4);
fibCounter(5);
