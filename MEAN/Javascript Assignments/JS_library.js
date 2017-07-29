 /*jshint esversion: 6 */
var _ = {
  map: function(arr, callback){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      newArr.push(callback(arr[i]));
    }
    return newArr;
  },
  reduce: function(arr, callback, memo){
    let index = 0;
    if(memo === undefined){
      memo = arr[index++];
    }
    for(; index < arr.length; index++){
      memo = callback(memo, arr[index]);
    }
    return memo;
  },
  find: function(arr, callback){
    for(let i = 0; i < arr.length; i++){
      if(callback(arr[i])){
        return arr[i];
      }
    }
  },
  filter: function(arr, callback){
    let newArr1 = [];
    for(let i = 0; i < arr.length; i++){
      if(callback(arr[i])){
        newArr1.push(arr[i]);
      }
    }
    return newArr1;
  },
  reject: function(arr, callback){
    let newArr2 = [];
    for(let i = 0; i < arr.length; i++){
      if(! callback(arr[i])){
        newArr2.push(arr[i]);
      }
    }
    return newArr2;
  }
};

let array = [1,2,3];

let mapped_by_three = _.map(array, function(num){ return num * 3;});
console.log(mapped_by_three);

let reduced = _.reduce(array, function(memo, num){ return memo + num; }, 0);
console.log(reduced);

let evens = _.find(array, function(num) { return num % 2 == 0; });
console.log(evens);

let filtered = _.filter(array, function(num) { return num % 2 == 0; });
console.log(filtered);

let rejected = _.reject(array, function(num) { return num % 2 == 0; });
console.log(rejected);
