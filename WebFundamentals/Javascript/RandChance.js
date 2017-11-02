function slots(quarters){
  win = Math.floor(Math.random() * 100);
  console.log("The winning number is "+win+".");
  var roll = 1;
  for(quarters; quarters >= 0; quarters--){
    spin = Math.trunc(Math.random() * 100);
    if(spin == win){
      prize = Math.floor((Math.random() * 50) + 50);
      quarters += prize;
      console.log("You won "+prize+" quarters. You now have "+quarters+" quarters.");
    }
    else if(spin !== win){
      console.log("You did not win this time. Better luck next time");
      roll += 1;
    }
    else if(quarters === 0){
      console.log("You have run out of quarters");
    }
  }
}

slots(75);
