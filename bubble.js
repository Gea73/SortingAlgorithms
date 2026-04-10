const array = [5, 1, 99, 3, 5, 0, 10, 20, 4, 33];

for (let i = 0; i < array.length - 1; i++) {
  let swapped = false;
  for (let j = 0; j < array.length - i - 1; j++) {
    if (array[j] > array[j + 1]) {
      const temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
      swapped = true;
    }
  }
  if (!swapped) break;
}
console.log(array);
