 /*jshint esversion: 6 */
class Ninja{
  constructor(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }

  sayName(){
    console.log(`Name: ${this.name}`);
  }

  drinkSake(){
    this.health += 10;
  }

  showStats(){
    console.log(`Name: ${this.name}, Current Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
  }
}

class Sensei extends Ninja{
  constructor(name){
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }

  speakWisdom(){
    this.drinkSake();
    console.log("The road to ruin is shorter than you think.");
  }
}

let ninja1 = new Ninja("Master Yi");
let ninja2 = new Sensei("Yasuo");

ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

ninja2.speakWisdom();
ninja2.showStats();
