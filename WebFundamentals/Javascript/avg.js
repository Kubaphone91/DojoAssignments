var x = [3,5,6,7,7,8,10];

function average(arr){
  var sum = 0;
  var divider = arr.length;
  for(var i = 0; i < arr.length; i++)
  {
    sum += arr[i];
  }
  var avg = sum/divider;
  console.log(avg);
}

average(x);
