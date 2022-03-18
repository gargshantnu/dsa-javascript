function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

// If array is nearly sorted, bubble sort can perform best
// Time complexity O(n^2)
function bubbleSort(arr) {
    let didWeSwap = false;
    // In this we push biggest element to the end, one-by-one
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                didWeSwap = true
            }
        }
        if (didWeSwap) {
            // Its short circuit, if didn't do swap in last run, we wont be making any in upcoming runs.
            break;
        }
    }
    return arr;
}

// console.log(bubbleSort([6, 5, 10, 15]));
console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]));