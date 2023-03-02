console.log(`-------- Assignmet No.0A --------`)

function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:    // monthNumber==0   
      console.log(`The 1st month is : January`);
      break;

    case 2:  
      console.log(`2nd month is : February `);

      break;

    case 3:
      console.log(`3rd month is : March`);

      break;

    case 4:
      console.log(`4th month is : April`);

      break;

    case 5:
      console.log(`5th month is: May`);

      break;

    case 6:
      console.log(`6th month is : June`);

      break;

    case 7:
      console.log(`7th month is : Jully`);

      break;

    case 8:
      console.log(`8th month is : Aguast`);

      break;

    case 9:
      console.log(`9th month is : Saptember`);

      break;

    case 10:
      console.log(`10th month is: Octomber`);

      break;

    case 11:
      console.log(`11th month is : November`);

      break;

    case 12:
      console.log(`12th month is : December`);

      break;

    default:
      console.log(`Incorrect month number: ${monthNumber}`);
      break;
  }
//   console.log(`End of switch case for ${monthNumber}`);
}
monthOfYear(0);  // invalid month number
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100); // Invalid month number
monthOfYear(9);
monthOfYear(11);

