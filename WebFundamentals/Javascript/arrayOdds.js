function odds(){
  var x = [];
  for(var i = 1; i <= 255; i++)
  {
    if(i % 2 !== 0)
    {
      x.push(i);
    }
  }
  console.log(x);
  return x;
}

odds();
