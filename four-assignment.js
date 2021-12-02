

const phoneBook = [

{   
    sl :1,
    name: 'Shamim',
    relation : 'Friends',
    location : 'Sherpur',
    phoneNumber : 5214589251,
},

{
    sl : 2,
    name: 'Shaker',
    relation: 'Uncle',
    location: 'Sherpur',
    phoneNumber: 988589252,
},


{
    sl : 3,
    name: 'Alamin',
    relation: 'Uncle',
    location: 'Sherpur',
    phoneNumber: 521458922,
},


{
    sl : 4,
    name: 'Mahim',
    relation: 'Brother',
    location: 'Dhaka',
    phoneNumber: 5214589295,
},


{

    sl : 5,
    name: 'Robin',
    relation: 'Brother',
    location: 'Dhaka',
    phoneNumber: 5214587777,
},


{
    sl : 6,
    name: 'Bozlu',
    relation: 'Brother',
    location: 'Sherpur',
    phoneNumber: 5214588888,
},


{
    sl : 7,
    name: 'Khurshed',
    relation: 'Uncle',
    location: 'Dhaka',
    phoneNumber: 52145445555,
},


{
    sl : 8,
    name: 'Sojib',
    relation: 'Friends',
    location: 'Sherpur',
    phoneNumber: 52145835252,
},


{
    sl : 9,
    name: 'Alomgir',
    relation: 'Friends',
    location: 'Sherpur',
    phoneNumber: 521458222222,
},


{
    sl : 10,
    name: 'Nayim',
    relation: 'Friends',
    location: 'Mymensing',
    phoneNumber: 521458911111,
},


{
    sl: 11,
    name: 'Sohel',
    relation: 'Friends',
    location: 'Sherpur',
    phoneNumber: 5258923333,
},


{
    sl: 12,
    name: 'Milon',
    relation: 'Friends',
    location: 'Sherpur',
    phoneNumber: 5214580000,
},



]


phoneBook.map(data =>{

    let name = data.name .toLowerCase()  ;
    let rel = data.relation .toLowerCase() ; 
    let loc = data.location .toLowerCase() ; 

    


    if(rel == 'friends'){

console.log(`
    
    Serial No: ${data.sl}
    Name : ${data.name}
    Relation : ${data.relation}
    Location : ${data.location}
    Phone Number : ${data.phoneNumber}
    
    `);
    }


})