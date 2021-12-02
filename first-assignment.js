

const devsSkill = [

    {
        id : 1,
        name : 'shamim',
        skill : 'Mern Stack',
        salery : 35000,

    },

    {
        id: 2,
        name: 'shaker',
        skill: 'Laravel',
        salery: 30000,

    },

    {
        id: 3,
        name: 'Sarowar',
        skill: 'Django',
        salery: 45000,

    },

    {
        id: 4,
        name: 'Mahim',
        skill: 'Golan',
        salery: 50000,

    },

    {
        id: 5,
        name: 'Robin',
        skill: 'Wordpress',
        salery: 20000,

    },

    {
        id: 6,
        name: 'Manik',
        skill: 'Java',
        salery: 60000,

    },

] 

 let totalMoney = 0;
 let person = 0; 

devsSkill.map ( data => {

console.log(`

id: : ${data.id}
Name : ${ data.name}
Skill : ${data.skill}
Salery : ${data.salery}


`);

 totalMoney = totalMoney + data.salery;
 person = data.id++;

})

console.log( ` 

==========================================
Total Sallery = ${ totalMoney} Taka

Total = ${person} Peron 

` );