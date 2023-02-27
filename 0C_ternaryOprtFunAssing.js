//  Fun With Argument and no retrun value:
console.log("======== Assingment 0C ========")

function tcsEligibility(gradScore, hscScore, sscScore, candidateName){
    var result = (gradScore >= 70 || hscScore >= 80 || sscScore >90) ? `Congrates ${candidateName} you are eligible for TCS interview` : `Sorry ${candidateName} unfortunetly you are not eligibile for interview`;
    console.log(`Eligibility:-`,result);
}
tcsEligibility(80, 86, 90, "Vishal");
tcsEligibility(70, 65, 55, "Akash");
tcsEligibility(60, 79, 88, "Shital");

