const matrix = '1 2 3\n4 5 6\n7 8 9\n8 7 6';

function extractRows(matrix) {
  return matrix
    .split('\n')
    .map((elem) => elem.split(' '))
    .map((elem) => elem.map((el) => Number(el)));
}

function extractColumns(rows) {
  const columns = [];
  const numRows = rows.length;
  const numColumns = rows[0].length;

  for (let col = 0; col < numColumns; col++) {
    const column = [];
    for (let row = 0; row < numRows; row++) {
      column.push(rows[row][col]);
    }
    columns.push(column);
  }
  console.log(columns);
}

extractColumns(extractRows(matrix));
