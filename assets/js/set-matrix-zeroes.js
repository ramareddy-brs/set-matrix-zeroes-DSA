let matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ];
  
  function displayMatrix(matrix) {
    const table = document.getElementById('matrix');
    table.innerHTML = '';
  
    for (let i = 0; i < matrix.length; i++) {
      const row = table.insertRow();
      for (let j = 0; j < matrix[0].length; j++) {
        const cell = row.insertCell();
        cell.textContent = matrix[i][j];
      }
    }
  }
  
  function zeroMatrix() {
    const rowsToZero = new Set();
    const colsToZero = new Set();
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] === 0) {
          rowsToZero.add(i);
          colsToZero.add(j);
        }
      }
    }
  
    for (const row of rowsToZero) {
      for (let j = 0; j < matrix[0].length; j++) {
        matrix[row][j] = 0;
      }
    }
  
    for (const col of colsToZero) {
      for (let i = 0; i < matrix.length; i++) {
        matrix[i][col] = 0;
      }
    }
  
    displayMatrix(matrix);
  }
  
  displayMatrix(matrix);
  