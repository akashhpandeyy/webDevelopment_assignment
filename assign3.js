let score = 85;
console.log(`Score: ${score}`);

let grade;
switch (true) {
  case score >= 90: grade = 'A'; break;
  case score >= 80: grade = 'B'; break;
  case score >= 70: grade = 'C'; break;
  default: grade = 'F';
}
console.log(`Grade: ${grade}`);

let status = score >= 50 ? "Passed" : "Failed";
console.log(`Status: ${status}`);