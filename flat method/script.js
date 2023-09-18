/**
 * the flat() method is used to create a new array that is
 * a flattened version of the original array, which means
 * it removes any nested arrays and combines their elements
 * into a single array.
 * The default value is 1 which means it will only flatten
 * one level deep.
 * It is a immutated method;
 * Flat method change the length of the array;
 *
 */

const arr = [1, 2, [3, 4], [5, 6, 7, [8, [9 , [10,[20,[30]]]]]]];

const flatArr = arr.flat(100);
console.log(flatArr);
