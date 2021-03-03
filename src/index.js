module.exports = function towelSort(matrix) {
    if (matrix) {
      let output = [];

      for (let row = 0; row < matrix.length; row++) {
        if (row % 2 == 0) {
          // inline case 
          for (let item = 0; item < matrix[row].length; item++) {
            output.push(matrix[row][item]);
          }
        } else {
          // reversed case
          for (let item = matrix[row].length - 1; item >= 0; item--) {
            output.push(matrix[row][item]);
          }
        }
      }
      
      return output;

    } else {
        return [];
    }
}