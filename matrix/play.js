const matrix = '1 2 3\n4 5 6\n7 8 9\n8 7 6';

function extractRows(matrix) {
  return matrix
    .split('\n')
    .map((elem) => elem.split(' '))
    .map((elem) => elem.map((el) => Number(el)));
}

function extractColumns(rows) {
  const columns = [];
  for (let i = 0; i < rows.length; i++) {
    const column = [];
    for (let j = 0; j < rows[i].length; j++) {
      column.push(rows[i][j]);
    }
    columns.push(column);
  }
  console.log(columns);
}

extractColumns(extractRows(matrix));
