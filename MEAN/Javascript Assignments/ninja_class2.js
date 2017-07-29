 /*jshint esversion: 6 */
function Ninja(name){
  this.name = name;
  let health = 100;
  let speed = 3;
  let strength = 3;

  this.damageHealth = function(damage){
    health -= damage;
  };

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
    console.log("Current Health: " + health);
    console.log("Speed: " + speed);
    console.log("Strength: " + strength);
  };

  this.punch = function(target){
    if(target instanceof Ninja){
      target.damageHealth(5);
      console.log(target.name + " was punched by " + this.name + " and lost 5 health!" );
    }
    else{
      console.log("Ninja must be targeted");
    }
  };

  this.kick = function(target){
    if(target instanceof Ninja){
      let kickDamage = 15 * Number(strength);
      target.damageHealth(kickDamage);
      console.log(target.name + " was kicked by " + this.name + " and lost " + kickDamage + " health!");
    }
    else{
      console.log("Ninja must be targeted");
    }
  };
}

var red_ninja = new Ninja("Yasuo");
var blue_ninja = new Ninja("Master Yi");

red_ninja.kick(blue_ninja);
console.log(blue_ninja.showStats());
