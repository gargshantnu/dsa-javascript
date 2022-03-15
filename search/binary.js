function searchBinary(arr, target) {
    var start = 0;
    var end = arr.length;
    var mid = Math.floor((start + end) / 2);
    while (arr[mid] != target && start <= end) {
        if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        mid = Math.floor((start + end) / 2);
    }
    if (arr[mid] == target) {
        return mid;
    }
    return -1;
}


let a = [34, 56, 1, 2];
console.log(searchBinary(a, 1));


// Time complexity O(log(n))