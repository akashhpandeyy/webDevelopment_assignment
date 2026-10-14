function calculateStandardArea(length = 5, width = 4) {
  return length * width;
}
console.log(`Standard Function Area (Default 5x4): ${calculateStandardArea()}`);

const calculateArrowArea = (length = 10, width = 3) => length * width;
console.log(`Arrow Function Area (Custom 10x3): ${calculateArrowArea(10, 3)}`);

try {
  { let blockVar = "secret"; }
  console.log(blockVar);
} catch (error) {
  console.log(`Scope Test Error: ${error.name}: ${error.message}`);
}