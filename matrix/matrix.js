// @ts-check

/**
 * The class `Matrix` represents a two-dimensional array created from
 * a string representing that matrix with optional embedded newlines.
 */
export class Matrix {
  /**
   *
   * @param {string} stringMatrix a string representation of the matrix
   * containing optional embedded newline characters.
   * @returns {number[][]}
   */
  static extractRows(stringMatrix) {
    return stringMatrix
      .split('\n')
      .map((elem) => elem.split(' '))
      .map((elem) => elem.map((el) => Number(el)));
  }

  /**
   * @param {string} stringMatrix a string representation of the matrix
   * containing optional embedded newline characters.
   * @param {*} stringMatrix
   * @returns {number[][]}
   */
  static extractColumns(stringMatrix) {
    const rows = Matrix.extractRows(stringMatrix);
    const numRows = rows.length;
    const numCols = rows[0].length;

    const columns = Array.from({ length: numCols }, () => []);

    for (let col = 0; col < numCols; col++) {
      for (let row = 0; row < numRows; row++) {
        columns[col].push(rows[row][col]);
      }
    }
    console.log(columns);
    return columns;
  }

  /**
   * The `Matrix` constructor function.
   *
   * @param {string} stringMatrix a string representation of the matrix
   * containing optional embedded newline characters.
   */
  constructor(stringMatrix) {
    this._rows = Matrix.extractRows(stringMatrix);
    this._columns = Matrix.extractColumns(stringMatrix);
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}
