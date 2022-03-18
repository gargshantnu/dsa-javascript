function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function bubbleSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}

// console.log(bubbleSort([6, 5, 10, 15]));
console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]));