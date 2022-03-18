function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

// It is better if you want to minimize number of swaps, else its just same as bubble sort
// Time complexity O(n^2)
function selectionSort(arr) {
    // In this we push smallest element to the start, one-by-one
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (i != minIndex) {
            swap(arr, i, minIndex);
        }
    }
    return arr;
}

// console.log(selectionSort([6, 5, 10, 15]));
console.log(selectionSort([37, 45, 29, 8, 12, 88, -3]));