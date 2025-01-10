// Test Data 1
let markMass1 = 78; 
let markHeight1 = 1.69; 
let johnMass1 = 92; 
let johnHeight1 = 1.95; 

// Test Data 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

// Function to calculate BMI
function calculateBMI(mass, height) {
  return mass / height ** 2; // BMI formula
}

// Compare BMIs and print results
function compareBMIs(markMass, markHeight, johnMass, johnHeight) {
  const markBMI = calculateBMI(markMass, markHeight).toFixed(2);
  const johnBMI = calculateBMI(johnMass, johnHeight).toFixed(2);

  if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
  } else if (johnBMI > markBMI) {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
  } else {
    console.log(`Mark and John have the same BMI (${markBMI})!`);
  }
}

// Compare BMIs for Test Data 1
console.log("Test Data 1:");
compareBMIs(markMass1, markHeight1, johnMass1, johnHeight1);

// Compare BMIs for Test Data 2
console.log("\nTest Data 2:");
compareBMIs(markMass2, markHeight2, johnMass2, johnHeight2);
