/*jshint esversion: 6 */
function Ninja(name){
  this.name = name;
  let health = 100;
  let speed = 3;
  let strength = 3;

  this.sayName = function(){
    console.log("Name: " + this.name);
    return this;
  };

  this.drinkSake = function(){
    health += 10;
    return this;
  };

  this.showStats = function(){
    this.sayName();
    console.log("Current health: " + health);
    console.log("Speed: " + speed);
    console.log("Strength: " + strength);
  };
}

var ninja1 = new Ninja("Yasuo");
ninja1.drinkSake().showStats();
