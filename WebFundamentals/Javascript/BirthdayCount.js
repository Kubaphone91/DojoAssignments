var countdown = 30;
for(countdown; countdown >= 0; countdown--){
  if(countdown >= 30){
    console.log(countdown+" days until my birthday. So far away...");
  }
  else if(countdown > 5){
    console.log(countdown+" days until my birthday. It's getting there...");
  }
  else if(countdown > 0){
    console.log(countdown+" days until my birthday. It's almost here!");
  }
  else if(countdown === 0){
    console.log("It's party time! Woo!");
  }
}
