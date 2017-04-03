var x = [1,2,3,5,6,7];
var y = 3;

function greater(arr,param){
  var count = 0;
  for(var i = 0; i < arr.length; i++)
  {
    if(arr[i] > param)
    {
      count++;
    }
  }
  console.log(count);
  return arr, param;
}

greater(x,y);
