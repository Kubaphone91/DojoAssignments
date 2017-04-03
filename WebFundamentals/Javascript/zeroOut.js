var x = [-1,2,5,6,-3];

function zeroed(arr){
  for(var i = 0; i < arr.length; i++)
  {
    if(arr[i] < 0)
    {
      arr[i] = 0;
    }
  }
  console.log(x);
  return arr;
}

zeroed(x);
