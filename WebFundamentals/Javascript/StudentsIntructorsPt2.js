var user ={
  'Students': [
    {first_name: 'Michael',last_name: 'Jordan'},
    {first_name: 'John', last_name: 'Rosales'},
    {first_name: 'Mark', last_name: 'Guillen'},
    {first_name: 'KB', last_name: 'Tonel'}
  ],
  'Instructors': [
    {first_name: 'Michael', last_name: 'Choi'},
    {first_name: 'Martin', last_name: 'Puryear'}
  ]
};

console.log('Students');
for(var x = 0; x < user.Students.length; x++){
  var rank = x + 1;
  var namelength = user.Students[x].first_name.length + user.Students[x].last_name.length;
  console.log(rank+" - "+user.Students[x].first_name+" "+user.Students[x].last_name+" - "+ namelength);
}

console.log('Instructors');
for(var x = 0; x < user.Instructors.length; x++){
  var rank = x + 1;
  var namelength = user.Instructors[x].first_name.length + user.Instructors[x].last_name.length;
  console.log(rank+" - "+user.Instructors[x].first_name+" "+user.Instructors[x].last_name+" - "+ namelength);
}
