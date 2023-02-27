console.log(`========== Assingments No.1 =========`)
console.log(`========== Step 1. ===========`)

function voteEligibility(age){
    if (age <=0 || age == undefined || age==null || age>120){
        console.log(`${age} Invalid data Please provide valid age`);

    } 
    if (age >=18 && age<120) {
         console.log(` Your Age : ${age} Your are eligible for vote`);
        
    } 
    else if (age >18 && age >1){
        console.log(`Your are not eligible for Vote`);
    }

}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(120);




console.log(`========== Step 2. ==========`)

function gradeCalculation(marks){
    if (marks >= 90){
        console.log(`Funtastic marks ${marks} your Grade is A+`);
    }
    if (marks >= 75 && marks < 90 ){
        console.log(`Excellent marks ${marks} your Grade is A`);
    }
    if (marks >= 50 && marks < 75){
        console.log(`Good marks ${marks}, your grade is B`);
    }
    if (marks >=35 && marks < 50){
        console.log(`Poor Marks ${marks}, your grade is C, Need to improvement`);
    }
    if (marks<=0 || marks > 100 || (typeof marks!= "number" || marks==undefined)){
        console.log(`Invalid Data: Please provide the valid marks: ${marks}`);

    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);



