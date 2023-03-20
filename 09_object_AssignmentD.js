console.log("=============== Step 1. ==============")

let professor = {
    name : "Krunal Mudafale",
    addrees : "Nagpur",
    age : "37",
    department : "Mechanical",
    subjectTech : "Fluid Mechanics",
    id : "245639",
  
    degrees : {
        Engineering : "CSC",
        PHD : "Adv Computing",
        Diploma : "Mechanical",
        Science : "MCA",
        Commerce : "English",
        MBA: "Marketing",
    },
   
    certificates : ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming"],  // Array


    degreesDetails : function(){
      return `Total Degrees are:--> Engineering ${this.degrees.Engineering}, PHD ${this.degrees.PHD}, Diploma ${this.degrees.Diploma}, Science ${this.degrees.Science}, Comemerce ${this.degrees.Commerce}, MBA ${this.degrees.MBA}`;  
    }

}
console.log(professor);

console.log("=============== Step 2 ================")
console.log(professor.degrees);
console.log("=============== Step 3 ================")
console.log(professor.certificates);
console.log("=============== Step 4 ================")
const result = professor.degreesDetails();    //Function Expression
console.log(result);

const totalDegree = professor.degreesDetails.length
console.log(professor.totalLength);

console.log("=========== Step 5. Try to add New property like totalExperience: '14 Years' and log on console? ==========")

professor.workExperienc = "14 years";   // Add New Property after create an Object
console.log(`Total Work Experince is:--> ${professor.workExperienc}`);

console.log("============== Step 6. Modify any existing property and log complete object on console? ====================")

professor.addrees = "Pune"
console.log(`The modify property is:--> ${professor.addrees}`)
console.log(professor);

console.log("========== Step 7. Add one new Certificate--> 'Oracle Certificate' at the end of array--> Certificate? ==========")
professor.certificates.push("Oracle Certified");
console.log(professor.certificates);

console.log("======================== Step 8. Log the last elements of the Array Certificates? =============================")

// console.log(professor.certificates)
console.log(professor.certificates[professor.certificates.length-1]);

