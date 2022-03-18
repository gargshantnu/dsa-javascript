// The comparator looks at the pairs of elements (a, b), and determines their sort order based on return value:
// 1. If return values is negative - a should come before b
// 2. If return values is positive - a should come after b
// 3. If return values is negative - a, b are same, as far as sort is concerned


function numberComparator(num1, num2) {
    return num1 - num2;
}

console.log([6, 4, 15, 10].sort(numberComparator));


function stringLengthComparator(string1, string2) {
    return string1.length - string2.length;
}

console.log(["Steele", "Colt", "Data Structures", "Algorithms"].sort(stringLengthComparator));
