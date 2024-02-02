function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    
    let firstRowZero = false;
    let firstColZero = false;
    
    // Check if the first row contains 0
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            firstRowZero = true;
            break;
        }
    }
    
    // Check if the first column contains 0
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }
    
    // Mark rows and columns that need to be set to 0
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;  // Mark the first element of the row
                matrix[0][j] = 0;  // Mark the first element of the column
            }
        }
    }
    
    // Set rows to 0 based on the marks in the first column
    for (let i = 1; i < m; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 1; j < n; j++) {
                matrix[i][j] = 0;
            }
        }
    }
    
    // Set columns to 0 based on the marks in the first row
    for (let j = 1; j < n; j++) {
        if (matrix[0][j] === 0) {
            for (let i = 1; i < m; i++) {
                matrix[i][j] = 0;
            }
        }
    }
    
    // Set the first row to 0 if needed
    if (firstRowZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
    
    // Set the first column to 0 if needed
    if (firstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
}

// Example usage
const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];

setZeroes(matrix);

console.log(matrix);