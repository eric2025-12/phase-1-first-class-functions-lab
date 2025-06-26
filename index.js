// Function to return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// Function to return the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// Define selectingDrivers array using the two functions above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Define the driver array once
const drivers = ['Eric', 'Ashley', 'Mark', 'Hope'];

// Call the functions to test
console.log(selectingDrivers[0](drivers)); // ['Eric', 'Ashley']
console.log(selectingDrivers[1](drivers)); // ['Mark', 'Hope']

// Function that returns a multiplier function
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// Create fare multipliers
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const fareQuadrupler = createFareMultiplier(4);

// Test fare multipliers
console.log(fareDoubler(10));     // 20
console.log(fareTripler(10));     // 30
console.log(fareQuadrupler(10));  // 40


