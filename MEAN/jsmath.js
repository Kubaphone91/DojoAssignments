 /*jshint esversion: 6 */
//Math 1
function zero_negativity(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      return false;
    }
    else {
      return true;
    }
  }
}

console.log('Negative Numbers: ' + zero_negativity([1, -1, 0, 5, 3]));

//Math 2
function is_even(input){
  if(input % 2 === 0){
    return true;
  }
  else {
    return false;
  }
}

console.log('The input is even: ' + is_even(4));

//Math 3
function how_many_even(arr){
  count = 0;
  for(let i = 0; i < arr.length; i++){
    if(is_even(arr[i])){
      count += 1;
    }
  }
  return count;
}

console.log('Number of even numbers: ' + how_many_even([1, 2, 3, 4, 5, 6]));

//Math 4
function create_dummy_array(n){
   newArr = [];
   for(let i = 0; i < n; i++){
     let rand = Math.floor(Math.random() * 10);
     newArr.push(rand);
   }
   return newArr;
}

console.log(create_dummy_array(10));

//Math 5
function random_choice(arr){
  let select = Math.floor(Math.random() * (arr.length));
  return arr[select];
}

console.log('Random Choice: ' + random_choice([1, 34, 65, 45, 13, 68]));
