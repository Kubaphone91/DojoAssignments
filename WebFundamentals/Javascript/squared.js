var x = [3,6,9,12,15];

function square(arr){
  for(var i = 0; i < arr.length; i++)
  {
    arr[i] *= arr[i];
  }
  console.log(x);
  return arr;
}

square(x);
