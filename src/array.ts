import './scss/styles.scss';
/**
 * Array
 */

// declare an array

// const list: number[] = [1, 2, 3];
//
// const categories: Array<string> =
//   ['Sport', 'IT', 'Car'];
//
// console.log('list');
// list.forEach((num) =>
//   console.log(num.toFixed(2))
// );
//
// console.log('categries');
// categories.forEach((str) =>
//   console.log(str.includes('a'))
// );

// convert mảng từ dạng này sang dạng khác.
// const listSquare = list.map(num => num * num);
// console.log(listSquare)
// Output: [1, 4, 9]

// lọc các phần tử thỏa mãn
// const result = categories.filter(str => str.length > 2)
// console.log(result);
// Output: ['Sport', 'Car']


/**
 * Tuple
 */

// Declare a tuple type
// let x: [string, number];
// Initialize it
// x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error

// console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1));
// Error, Property 'substr' does not exist on type 'number'.

// x[3] = "world";
// OK, 'string' can be assigned to 'string | number'
// x[5] = 100.25;
// console.log(x[5].toString());
// OK, 'string' and 'number' both have 'toString'

// x[6] = true; // Error, 'boolean' isn't 'string | number'

const list: number[] = [1, 2, 3];
const categories: Array<String> = ['Sport', 'IT', 'Car'];
console.log('list');
list.forEach(function (num) {
    console.log(num.toFixed(2))
})

console.log('categories');
categories.forEach(function (str) {
    console.log(str.includes('a'))
});

const listSquare = list.map(function (num) {
    return num * num;
});
console.log(listSquare);

function newMap(array: Array<any>, handle: Function): Array<any> {
    let result = [];
    for (let item of array) {
        result.push(handle(item));
    }
    return result;
}

const newListSquare = newMap(list, function (num) {
    return num * num;
})
console.log("newListSquare: " + newListSquare);

const result = categories.filter(function (str) {
    return str.length > 2;
})
console.log(result);

function newFilter(array: Array<any>, handle: Function): Array<any> {
    let result = [];
    for (let item of array) {
        if (handle(item)) {
            result.push(item);
        }
    }
    return result;
}

let demoArray = [1, 3, 6, 5];
let demoResult = newFilter(demoArray, testValue);
console.log("demoResult" + demoResult);

function testValue(value) {
    if (value > 3) {
        return true;
    }
    return false
}

let x: [string, number];
x = ["hello", 10];

console.log(x[0].substr(1));
// console.log(x[1].substr(1));
x[3] = "world";
x[5] = 100.25;
console.log(x[5].toString())
// x[6] = true;
