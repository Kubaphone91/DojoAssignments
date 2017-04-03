var x = [3,4,6,7,9,10,-3];

function maximum(arr){
  var max = 0;
  for(var i = 0; i < arr.length; i++)
  {
    if(arr[i] > max)
    {
      max = arr[i];
    }
  }
  console.log(max);
}

maximum(x);
