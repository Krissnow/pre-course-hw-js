function deleteNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
      if (numbers[i][j] % 2 !== 0) {
        numbers[i].splice(j, 1);
        j--;
      }
    }
  }
  return numbers;
}

let numbers = [
  [1, 2, 3, 4, 5],
  [11, 20, 33, 40, 55],
  [111, 200, 333, 400, 555],
];

deleteNumbers(numbers);
console.log(numbers);
