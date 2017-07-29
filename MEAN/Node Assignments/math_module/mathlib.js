module.exports = function(){
  return {
    add: function(num1, num2){
      console.log("The addition sum is: " + (num1 + num2));
    },
    multiply: function(num1, num2){
      console.log("The multiplication sum is: " + (num1 * num2));
    },
    square: function(num){
      console.log("The square of " + num + " is: " + (Math.pow(num, 2)));
    },
    random: function(num1, num2){
      console.log("Random number between " + num2 + " and " + (num1 + num2) + " is " + (Math.floor(Math.random() * num2) + num1));
    }
  };
};
