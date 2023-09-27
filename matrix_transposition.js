function initialize2DArray(rows, cols, defaultValue) {
  return Array.from({ length: rows }, () => Array(cols).fill(defaultValue));
}

const transpose = function (matrix) {
  // Replace this code with your solution
    
  const rows = matrix.length;
  const cols = matrix[0].length;
  const emptyMat = initialize2DArray(cols, rows, 0);


  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      emptyMat[i][j] = matrix[j][i];
    }
  }
  return emptyMat;
};

module.exports = transpose;

// // Do not edit this function.
// const printMatrix = (matrix) => {
//   for (const row of matrix) {
//     for (const el of row) {
//       process.stdout.write(el + " ");
//     }
//     process.stdout.write("\n");
//   }
// };

// printMatrix(
//   transpose([
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//   ])
// );

// console.log("----");

// printMatrix(
//   transpose([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ])
// );

// console.log("----");

// printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));

// // expect output
// // 1 1 1 1
// // 2 2 2 2
// // 3 3 3 3
// // 4 4 4 4
// // ----
// // 1 3 5
// // 2 4 6
// // ----
// // 1;
// // 2;
// // 3;
// // 4;
// // 5;
// // 6;
// // 7;

// // Implementing the function for transpose. 1hr spent. Pairing with @Prabhjot



