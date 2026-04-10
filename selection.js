const array = [5, 1, 99, 3, 5, 0, 10, 20, 4, 33];

for (let i = 0; i < array.length - 1; i++) {
    //assumes the smallest is the first of the sorted part of thearray
  let smallIndex = i;
  //start the inner loop from the unsorted part of the array
  for (let j = i + 1; j < array.length; j++) {
    if (array[j] < array[smallIndex]) {
        //scans the whole array to find the min value
      smallIndex = j;
    }
  }
  let temp = array[i];
  array[i] = array[smallIndex];
  array[smallIndex] = temp;
  //switches the smallest find in the unsorted part with the next one in the sorted part
}

console.log(array);
