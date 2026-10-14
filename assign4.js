console.log("Multiplication Table of 5");
for (let i = 1; i <= 5; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}

console.log("First number > 10 divisible by 6");
let currentNum = 11;
while (true) {
  if (currentNum % 6 === 0) {
    console.log(`Found: ${currentNum}`);
    break;
  }
  currentNum++;
}