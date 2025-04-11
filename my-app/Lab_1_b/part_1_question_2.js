// Dữ liệu kiểm tra 1
let markMass1 = 78; 
let markHeight1 = 1.69; 
let johnMass1 = 92; 
let johnHeight1 = 1.95; 

// Dữ liệu kiểm tra 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

// Hàm tính chỉ số BMI
function calculateBMI(mass, height) {
  return mass / height ** 2; // Công thức tính BMI
}

// So sánh BMI và in kết quả
function compareBMIs(markMass, markHeight, johnMass, johnHeight) {
  const markBMI = calculateBMI(markMass, markHeight).toFixed(2);
  const johnBMI = calculateBMI(johnMass, johnHeight).toFixed(2);

  if (markBMI > johnBMI) {
    console.log(`BMI của Mark (${markBMI}) cao hơn BMI của John (${johnBMI})!`);
  } else if (johnBMI > markBMI) {
    console.log(`BMI của John (${johnBMI}) cao hơn BMI của Mark (${markBMI})!`);
  } else {
    console.log(`Mark và John có cùng chỉ số BMI (${markBMI})!`);
  }
}

// So sánh BMI cho Dữ liệu kiểm tra 1
console.log("Dữ liệu kiểm tra 1:");
compareBMIs(markMass1, markHeight1, johnMass1, johnHeight1);

// So sánh BMI cho Dữ liệu kiểm tra 2
console.log("\nDữ liệu kiểm tra 2:");
compareBMIs(markMass2, markHeight2, johnMass2, johnHeight2);
