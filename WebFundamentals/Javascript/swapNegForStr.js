function swap(arr){
  for(var i = 0; i < arr.length; i++)
  {
    if(arr[i] < 0)
    {
      arr[i] = 'Dojo';
    }
  }
  return arr;
}

console.log(swap([-1,3,0,5,-3]));
