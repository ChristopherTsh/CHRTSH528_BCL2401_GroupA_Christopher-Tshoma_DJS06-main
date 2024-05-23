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

const upperCaseProvince = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvince);

const nameLength = names.map(name => name.length);
console.log(nameLength);

const sortedProvinces = [provinces].sort(); 
console.log(sortedProvinces);

console.log(products.map(product => product.product));

console.log(products.filter(product => product.product.length <= 5));
