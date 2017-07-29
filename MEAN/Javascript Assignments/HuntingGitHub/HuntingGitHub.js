/*jshint esversion: 6 */
$(document).ready(function(){
  $('form').submit(function(){
    $.get("https://api.github.com/users/Kubaphone91", displayName);
    this.reset();
  });

  function displayName(data){
    $('p').html(`\n My Name: ${ data.name }`);
  }
});
