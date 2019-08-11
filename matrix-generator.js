'use strict';

function matrixGenerator(rows, columns) {
  // do work here
  let matrix = [];

  for (let i = 0; i < rows; i++) {
    let columnArr = [];

    for (let j = 0; j < columns; j++) {
      columnArr.push(Math.floor(Math.random * 100))
      columnArr.sort();
    }

    matrix.push(columnArr);
  }

  return matrix
}

console.log(matrixGenerator())


module.exports = matrixGenerator;
