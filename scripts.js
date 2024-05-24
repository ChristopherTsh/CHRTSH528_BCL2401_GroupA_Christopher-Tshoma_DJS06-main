// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Log each name
names.forEach(name => console.log(name));
 
//Log each provence
provinces .forEach(provinces  => console.log(provinces));

// Log each name with matching province
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// Uppercase Transformation
const upperCaseProvince = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvince);

// **Name Lengths**
const nameLength = names.map(name => name.length);
console.log(nameLength);

// **Sorting**
const sortedProvinces = [...provinces].sort(); 
console.log(sortedProvinces);

console.log(products.map(product => product.product));


// **Filtering Cape**
// Use `filter` to remove provinces containing "Cape".
// Log the count of remaining provinces.

const filteredProvinces = provinces.filter(province =>!province('Cape'));
console.log(`Remaining provinces: ${filteredProvinces.length}`);

// **Finding 'S'**
// Create a boolean array using `map` and `some` 
const namesWithS = names.map(name => name('S'));
console.log(namesWithS);

// **Creating Object Mapping**
// Use `reduce` to transform the names array into an object mapping names to their respective provinces.

// **Advanced Exercises**

// **Filter by Name Length**
// Filter out products with names longer than 5 characters.
console.log(products.filter(product => product.product.length <= 5));

// **Price Manipulation**
// Filter out products without prices, convert string prices to numbers, and calculate the total price using `reduce`.
const totalPrice = products
 .filter(product => product.price!== '')
.map(product => ({...product, price: Number(product.price) }))
.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice);

// **Concatenate Product Names**
// Use `reduce` to concatenate all product names into a single string.
const concatenatedNames = products.reduce((acc,product) => acc + ' ' + product.product, '');
console.log(concatenatedNames);

// **Find Extremes in Prices**
// Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
const extremes = products
 .filter(product => product.price!== '')
 .map(product => ({price: Number(product.price) }))
 .reduce(
   (acc, product) => {
     acc.highest = Math.max(acc.highest || product.price, product.price);
     acc.lowest = Math.min(acc.lowest || product.price, product.price);
     return acc;
   },
   {}
 );

console.log(`Highest: ${extremes.highest}. Lowest: ${extremes.lowest}.`);


const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);

const transformedProducts = Object.entries(products).reduce(
  (acc, [index, product]) => ({...acc, [index]: {name: product.product, cost: Number(product.price)} }),
  {}
);

console.log(transformedProducts);