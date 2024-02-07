const arrayTest = [10, 20, 30];

arrayTest[2] = 99;
console.log(arrayTest);

function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}

console.log(getLastValue([10, 20, 30]));
console.log(getLastValue(["hi", "heeey", "oi oi"]));

function arraySwap(array) {
  const lastIndex = array.length - 1;
  const lastValue = array[lastIndex];
  const firstValue = array[0];

  array[0] = lastValue;
  array[lastIndex] = firstValue;

  return array;
}

console.log(arraySwap([10, 20, 30]));
console.log(arraySwap(["hi", "heeey", "oi oi"]));

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}
let i = 5;

while (i <= 10) {
  console.log(i);
  i++;
}

while (i >= 0) {
  console.log(i);
  i--;
}

const arrayTest = [10, 20, 30];
const arrayTestPlus = [];

for (let i = 0; i < arrayTest.length; i++) {
  arrayTestPlus.push(arrayTest[i] + 1);
}
console.log(arrayTestPlus);

function addOne(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 1);
  }

  return newArray;
}

console.log(addOne([11, 20, 30]));
console.log(addOne([99, -21, 299]));

function addNum(array, num) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + num);
  }
  return result;
}

console.log(addNum([10, 20, 220], 2));

function addArrays(array1, array2) {
  const result = [];

  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i] + array2[i]);
  }

  return result;
}

console.log(addArrays([10, 20, 30], [1, 2, 3]));

function countPositive(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result++;
    }
  }
  return result;
}

console.log(countPositive([10, -20, 30, -40]));

function minMax(nums) {
  const result = {
    min: null,
    max: null,
  };
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (result.min === null || value < result.min) {
      result.min = value;
    }
    if (result.max === null || value > result.max) {
      result.max = value;
    }
  }
  return result;
}

console.log(minMax([12, -2, 14, 48]));
console.log(minMax([2]));
console.log(minMax([]));

function countWords(words) {
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }
  return result;
}

console.log(countWords(["kiwi", "apple", "melon", "kiwi", "apple", "apple"]));
