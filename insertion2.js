const array = [5, 1, 99, 3, 5, 0, 10, 20, 4, 33];

for (let i = 1; i < array.length; i++) {
  let key = array[i];
  let j = i - 1;

  while (j >= 0 && key < array[j]) {
    array[j + 1] = array[j];
    j--;
  }
  array[j + 1] = key;
}

console.log(array);
