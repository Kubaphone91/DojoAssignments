function avg(arr){
  var max = 0;
  var min = 1;
  var divider = arr.length;
  var sum = 0;
  var average = 0;
  for(var i = 0; i < arr.length; i++)
  {
    if(arr[i] > max)
    {
      max = arr[i];
    }
    if(arr[i] <= min)
    {
      min = arr[i];
    }
    sum += arr[i];
  }
  average = sum/divider;
  console.log(max);
  console.log(min);
  console.log(average);
}

avg([0,2,3,4,5]);
