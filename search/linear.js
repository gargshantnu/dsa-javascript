function searchLinear(arr, k) {
    for (let i of arr) {
        if (arr[i] == k) {
            return i;
        }
    }
    return -1;
}


let a = [34, 56, 1, 2];
console.log(searchLinear(a, 1));

// console.log(a.indexOf(1));

// Time complexity O(n)