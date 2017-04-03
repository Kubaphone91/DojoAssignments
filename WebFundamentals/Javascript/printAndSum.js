function summation(){
  var sum = 0;
  for(var i = 0; i <= 255; i++)
  {
    sum += i;
    console.log(i,sum);
  }
}

summation();
