

let result = new Result();


const devs = [

    {
        board               :'Dhaka',
        roll                : 1,
        name                : 'Shamim',
        father_name         : 'Nur mahmud',
        bangla              : 65,
        english             : 55,
        math                : 25,
        ict                 : 82,
        social              : 79,
        rel                 : 86,
        
    },

     {
         board: 'Dhaka',
         roll: 2,
         name: 'shaker',
         father_name: 'Halim',
         bangla: 85,
         english: 45,
         math: 65,
         ict: 55,
         social: 79,
         rel: 83,

     },

      {
          board: 'Khulna',
          roll: 3,
          name: 'Joshim',
          father_name: 'Abu Bakkar',
          bangla: 85,
          english: 45,
          math: 77,
          ict: 68,
          social: 79,
          rel: 52,

      },

       {
           board: 'Jossor',
           roll: 4,
           name: 'Salam',
           father_name: 'Kolimoddin',
           bangla: 75,
           english: 65,
           math: 81,
           ict: 80,
           social: 89,
           rel: 86,

       },

        {
            board: 'khulna',
            roll: 5,
            name: 'Siddik',
            father_name: 'sayabali',
            bangla: 75,
            english: 65,
            math: 88,
            ict: 80,
            social: 72,
            rel: 86,

        },

         {
             board: 'Jossor',
             roll: 6,
             name: 'Mahim',
             father_name: 'Muslem',
             bangla: 85,
             english: 75,
             math: 82,
             ict: 77,
             social: 79,
             rel: 86,

         },

          {
              board: 'Dhaka',
              roll: 7,
              name: 'Saro',
              father_name: 'Abdul Halim',
              bangla: 85,
              english: 75,
              math: 82,
              ict: 89,
              social: 69,
              rel: 83,

          },

           {
               board: 'Khulna',
               roll: 8,
               name: 'Kalam',
               father_name: 'Sattar',
               bangla: 45,
               english: 95,
               math: 74,
               ict: 82,
               social: 75,
               rel: 86,

           },

            {
                board: 'Jossor',
                roll: 9,
                name: 'Soyab',
                father_name: 'Sofir Uddin',
                bangla: 95,
                english: 75,
                math: 72,
                ict: 82,
                social: 79,
                rel: 13,

            },

             {
                 board: 'Dhaka',
                 roll: 10,
                 name: 'Alamin',
                 father_name: 'Malek',
                 bangla: 55,
                 english: 95,
                 math: 85,
                 ict: 82,
                 social: 79,
                 rel: 50,

             },
];



devs.map(data=>{

   let bangla = data.bangla;
   let english = data.english;
    let math = data.math;
    let ict = data.ict;
    let social = data.social;
    let rel = data.rel;


    console.log(`
    Board   :${ data.board}
    Roll      : ${ data.roll }
    Name    : ${ data.name }
    Father's Name   : ${ data.father_name}
    
    subject         : Marks   : GPA   : GRADE  

    Bangla          : ${ bangla }      = ${result.gpa(bangla)}    = ${result.grade(result.gpa(bangla))}
    English         : ${ english }      = ${result.gpa(english)}    = ${result.grade(result.gpa(english))}
    Math            : ${ math}      = ${result.gpa(math)}    = ${result.grade(result.gpa(math))}
    Ict             : ${ ict }      = ${result.gpa(ict)}    = ${result.grade(result.gpa(ict))}
    Social          : ${  social }      = ${result.gpa(social)}    = ${result.grade(result.gpa(social))}
    Rel             : ${ rel }      = ${result.gpa(rel)}    = ${result.grade(result.gpa(rel))}

    ======================================================================================================================
        ${ result.cgpa (result.gpa(bangla), result.gpa(english ) , result.gpa(math), result.gpa(ict), result.gpa(social), result.gpa(rel)) }
    
    
    
    `);

})