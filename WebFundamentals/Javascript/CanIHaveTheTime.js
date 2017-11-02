var minute = 0;
var hour = 0;
var period = 0;
var timeofday = 0;
function time(hour,minute,period){
  if(hour == 12 && minute === 0 && period == "AM"){
    console.log("It's midnight.");
    return;
  }
  else if(hour == 12 && minute === 0 && period == "PM"){
    console.log("It's noon.");
    return;
  }
  if(period == "AM"){
    timeofday = "in the morning.";
  }
  else if(period == "PM" && hour <= 5){
    timeofday = "in the afternoon.";
  }
  else if(period == "PM" && hour <= 8){
    timeofday = "in the evening.";
  }
  else if(period == "PM" && hour >= 8){
    timeofday = "at night.";
  }
  if(minute === 0){
    console.log("It's exactly"+" "+hour+" "+timeofday);
  }
  else if(minute == 10){
    console.log("It's 10 past"+" "+hour+" "+timeofday);
  }
  else if(minute == 30){
    console.log("It's half past"+" "+hour+" "+timeofday);
  }
  else if(minute < 30){
    console.log("It's just past"+" "+hour+" "+timeofday);
  }
  else if(minute > 30){
    hour += 1;
    console.log("It's almost"+" "+hour+" "+timeofday);
  }
}

time(12,0,"PM")
