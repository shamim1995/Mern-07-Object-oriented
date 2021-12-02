

const picnic = [ 

    {
        sl: 1,
        name : 'Shaker',
        post : 'Sr.Assistant',
        amount : 1500,
    },

    {
        sl: 2,
        name: 'Roton',
        post: 'Executive',
        amount: 1000,
    },

    {
        sl: 3,
        name: 'Raju',
        post: 'Office Assistant',
        amount: 500,
    },

    {
        sl: 4,
        name: 'Selim',
        post: 'Sr.Assistant',
        amount: 1500,
    },

    {
        sl: 5,
        name: 'Sohel',
        post: 'Executive',
        amount: 1000,
    },

    {
        sl: 6,
        name : 'Shamim',
        post : 'Sr.Assistant',
        amount : 1500,
    },

    {
        sl: 7,
        name: 'Rased',
        post: 'Office Assistant',
        amount: 500,
    },

    {
        sl: 8,
        name: 'Rubel',
        post: 'Office Assistant',
        amount: 500,
    },

    {
        sl: 9,
        name: 'Md Golam',
        post: 'Gm',
        amount: 15000,
    },

    {
        sl: 10,
        name: 'Monayem',
        post: 'PM',
        amount: 12000,
    },
]

let totalAmount = 0;
let serial = 0;

picnic.map(data => {

    let amount = data.amount;

    let sl = data.sl;

    console.log(`

        Serial No: ${data.sl}
        Name     : ${data.name}
        Post    : ${data.post}
        Amount  : ${data.amount}
 
    `);

totalAmount = totalAmount + amount;
serial = sl++;


})


console.log( ` 
========================================

Total = ${serial} Person
Total Amount = ${totalAmount} Taka 

` );