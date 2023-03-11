console.log("===============$ Assignment No. 0A $===============")
console.log("======================== Step.1 ==========================")

class Vehicle {
    constructor(carCompanyName, carModel, carColour, carEngineType, carSeats,) {
        this.carCompanyName = carCompanyName
        this.carModel = carModel;
        this.carColour = carColour;
        this.carEngineType = carEngineType;
        this.carSeats = carSeats;
    }

}
const tataVehicle = new Vehicle("Tata", "Nexon EV max", "White", "Diesel", "6Seat")
console.log(tataVehicle);

const nissanVehicle = new Vehicle("Nissan", "SUVs Magnite", "Red", "Electronic", "10Seat")
console.log(nissanVehicle);

const kiaVehicle = new Vehicle("Kia", "Carnival", "Black", "CNG", " 14Seat")
console.log(kiaVehicle);

const marutiVehicle = new Vehicle("Maruti Suzuki", "Ertiga", "Blue", "Petrol", "6Seat")
console.log(marutiVehicle);

const renaultVehicle = new Vehicle("Renault", "Triber", "Orange", "Diesel", "4Seat")
console.log(renaultVehicle);

// Travers//
const arrayOfVehicles = [tataVehicle, nissanVehicle, kiaVehicle, marutiVehicle, renaultVehicle]   
for (let index = 0; index < arrayOfVehicles.length; index++) {
    const element = arrayOfVehicles[index];
    console.log(`Vehicle Details:--> ${element.carCompanyName}, ${element.carModel}, ${element.carColour}, ${element.carEngineType}, ${element.carSeats}`);
}

console.log("============================ Step.2 ============================")

class College {
    constructor(collegeName, university, deparment, location, rank){
        this.collegeName = collegeName;
        this.university = university;
        this.deparment = deparment;
        this.location = location;
        this.rank = rank;
    }
}
const mitCollege = new College("MIT", "World Peace", "Civil", "Mumbai", "1st")
console.log(mitCollege);

const alardCollege = new College("Alard Institute", "Mumbai", "Mechanical", "Pune", "3rd",)
console.log(alardCollege);

const priydarshiniCollege = new College("Priydarshini", "Nagpur", "IT", "RTMNU Nagpur", "2nd")
console.log(priydarshiniCollege);

const raisoniCollege = new College("Raisoni", "Sambhaji Nagar", "Electronic", "Aurangabad", "4th")
console.log(raisoniCollege);


console.log("============================= Step.3 ================================")

function traverseObject(CollegeDetails){
    for (const key in CollegeDetails) {
        if (Object.hasOwnProperty.call(CollegeDetails, key)) {
            const element = CollegeDetails[key];
            console.log(`${key}: ${element}`) 
        }
    }
}
traverseObject(mitCollege)
console.log("---------------------------------------------------------------------------------------------")
traverseObject(alardCollege);
console.log("---------------------------------------------------------------------------------------------")
traverseObject(priydarshiniCollege);
console.log("---------------------------------------------------------------------------------------------")
traverseObject(raisoniCollege);


console.log("============================= Step.4 =================================")

console.log("Que.4. Find the given number is prime Number or Not?")

const number = 11

// check if number is equal to 1
if (number == 1) {
    console.log(`${number} is neither prime nor composite number`);
}

// check if number is greater than 1
else if (number < 1) {
    console.log(`${number} is not a prime number`);
}else{
    for (let index = 2; index < number; index++) {
        if (number%index == 0) {
            const result = `${number} is not a prime number`;
            break;
        }else{
            var result = `${number} is a prime number`;
        }
    }
    console.log(result);
}
    




    


