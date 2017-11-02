var total = 0;
var penny = 0.01;
for(var days = 30; days >= 0; days--){
  total += penny;
  penny *= 2;
}

console.log("The total is $"+total);
