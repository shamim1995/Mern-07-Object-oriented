

function Result() {
    

    this.gpa = (number) => {
        
       

        if(number <= 32){
            return gpa = 0;
        }else if(number > 32 && number <= 40 ){
            return gpa=1.0;
        }else if( number > 40 && number <= 50 ){
            return gpa=2.0;
        }else if (number > 50 && number <= 60){
            return gpa=3.0;
        }else if (number > 60 && number <= 70){
            return gpa= 3.5;
        }else if ( number > 70 && number <= 79){
            return gpa= 4.0;
        } else if ( number >= 80 && number <= 100){
            return gpa=5.0
        }
        
    };



    this.grade = (gpa) => {
        
        if(gpa >= 0 && gpa < 1 ){

            return grade ='F';
        }else if (gpa >= 1 && gpa < 2){
            return grade='D';
        }else if(gpa >= 2 && gpa < 3){
            return grade='C'
        }else if( gpa >= 3 && gpa < 3.5 ){
            return grade='B';
        } else if(gpa >= 3.5 && gpa < 4){
            return grade = 'A-'
        }else if( gpa >= 4 && gpa < 5){

            return grade ='A';
        }else if( gpa == 5){
            return grade = 'A+'
        }
    };

    this.cgpa = ( bangla, english, math, ict, social, rel ) => {

        let totalSubject = (bangla + english + math + ict + social + rel);

        let cgpaNumber = (totalSubject / 6).toFixed() ;

        if( bangla == 0 || english == 0 || math == 0 || ict == 0 || social == 0 || rel == 0 ) {
            return `You are failed`
        } else {
             return ` Your CGPA = ${cgpaNumber } & Your GRADE =  ${result.grade(cgpaNumber)}`
        }

       

    }



};