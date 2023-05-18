/*
12.1
*/
const Julia1 = [3, 5, 2, 12, 7];
const Kate1 = [4, 1, 15, 8, 3];
const Julia2 = [9, 16, 6, 8, 3];
const Kate2 = [10, 5, 6, 1, 4];

const checkDogs = (julia, kate) => {
  removeCat(julia);
  const newDogArray = [julia, kate].flat();
  newDogArray.forEach((dogAge, i) => {
    if (dogAge >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

const removeCat = (dogArray) => {
  dogArray.pop();
  dogArray.shift();
};

// checkDogs(Julia1, Kate1);
// checkDogs(Julia2, Kate2);

/**
 12.2
 */
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const humanAge = (dogAge) => {
  let humanAge = dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
  return humanAge;
};

const calcAverageHumanAge = (dogAgeArray) => {
  dogAdultArray = dogAgeArray.map(humanAge).filter((humanAge) => humanAge > 18);
  avgAdultAge = dogAdultArray.reduce((a, b) => a + b, 0) / dogAdultArray.length;
  return {
    adultArray: dogAdultArray,
    avgAdultAge,
  };
};

console.log(calcAverageHumanAge(data1).avgAdultAge);
// console.log(calcAverageHumanAge(data2).avgAdultAge);

/*
12.3
*/

const calcAverageHumanAge1 = (dogAgeArray) =>
  dogAgeArray
    .map(humanAge)
    .filter((age) => age > 18)
    .reduce((a, b, i, array) => a + b / array.length, 0);

console.log(calcAverageHumanAge1(data1));
