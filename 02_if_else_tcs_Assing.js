console.log(`======== Assingment 02. ========`)

function tcsEligibility(gradScore, hscScore, sscScore, candidateName){
    if (gradScore >= 70 || hscScore >= 80 || sscScore > 90) {
        console.log(`Congrates ${candidateName} you are eligible for TCS interview`);
        
    } else {
        console.log(`Sorry ${candidateName} unfortunatly you are not eligible for interview`);
        
    }
}
tcsEligibility(80, 86, 90, "Vishal");
tcsEligibility(70, 65, 55, "Shital");
tcsEligibility(60, 79, 88, "Akash");
