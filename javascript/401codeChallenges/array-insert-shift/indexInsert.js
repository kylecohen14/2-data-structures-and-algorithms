'use strict';
const array = [2,4,6,-8];
const value = 5;

const num = value;
const arr = array;

function insertshiftarray() {

  let newArray = [];
  let j = 0;

  for (let i = 0; i < arr.length + 1; i++) {
    if (i === arr.length/2) {
      newArray[i] = num;
    }else{
      newArray[i] = arr[j];
      j++;
    }
  }
  return newArray;
}
console.log(insertshiftarray(arr,num));