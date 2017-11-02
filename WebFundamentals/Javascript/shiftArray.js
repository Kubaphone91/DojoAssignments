function shiftArray(arr){
  for (var idx = 0; idx < arr.length; idx++)
  {
    arr[idx] = arr[idx+1];
  }
  arr[arr.length - 1] = 0;
  return arr;
}

console.log(shiftArray([2,3,4,5,6,7]));
