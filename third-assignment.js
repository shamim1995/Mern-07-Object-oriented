

const age = [

{
    name : 'Shamim',
    location : ' Sherpur',
    age : 18
},
{
    name: 'Saro',
    location: ' Dhaka',
    age: 15
},

{
    name: 'Shaker',
    location: 'Banani',
    age: 41
},

{
    name: 'Alamin',
    location: 'Uttara',
    age: 14
},

]

 

age.map( data => {

let year = data.age;

console.log(`

Name: ${data.name}
Location : ${data.location}
Age : ${data.age}

`);


   if (year >= 0 && year < 18) {

       console.log(` You are not permit at my club because You are not adult`);
   } else if (year >= 18 && year < 40) {
       console.log(`Welcome at my club`);
   } else if (year >= 40) {
       console.log(`We are proud of you Because you are my old member at my club`);
   }
    
    
})