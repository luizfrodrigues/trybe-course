const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]; 

// for (let i = 0; i < companies.length; i+= 1) {
//   console.log(companies[i]);
// }

//forEach

// companies.forEach(function(company) {
//   console.log(company.category)
// });

// filter

// let canDrink = [];
// for (let index = 0; index < ages.length; index++) {
//   if(ages[index] >= 18) {
//     canDrink.push(ages[index]);
//   }
// }

// console.log(canDrink);

// const canDrink = ages.filter(age => age >= 18);

// console.log(canDrink);

//filter retail companies

// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);


// Get 80s companies

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
// console.log(eightiesCompanies);

// Get companies that lasted 10 years or more

// const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
// console.log (lastedTenYears);

// Map

//Create an arrray of company names

// const companyNames = companies.map(company => 
//   `${company.name} [${company.start} - ${company.end}]`);
// console.log(companyNames);

// const agesSquare = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age * 2);
// console.log(agesSquare);

// sort=> organizar uma lista ou array

//reduce

// const ageSum = ages.reduce((total, age) => (total + age), 0);
// console.log(ageSum);

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalYears);

//combine Methods

const combined = ages
.map(age=> age * 2)
.filter(age => age >= 40)
.sort((a,b) => a - b)
.reduce((a,b) => a + b, 0)

console.log(combined);