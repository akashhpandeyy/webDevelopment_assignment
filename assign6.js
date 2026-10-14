const products = [
  { name: 'Laptop', price: 800 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 45 }
];

console.log("All Products (forEach)");
products.forEach(p => console.log(`Item: ${p.name} - Price: \$${p.price}`));

console.log("Filtered Products (Price < \$50)");
console.log(products.filter(p => p.price < 50));

console.log("Mapped Product Tags (map)");
console.log(products.map(p => `${p.name.toUpperCase()} costs \$${p.price}`));