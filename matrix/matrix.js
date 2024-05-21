// @ts-check

/**
 * The class `Matrix` represents a two-dimensional array created from
 * a string representing that matrix with optional embedded newlines.
 */
export class Matrix {
  /**
   * Helper function to extract rows from a string representation of a
   * 2d matrix.
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
   * Instance method to extract columns.
   *
   * @returns {number[][]}
   */
  extractColumns() {
    const columns = [];
    const numRows = this.rows.length;
    const numColumns = this.rows[0].length;

    for (let col = 0; col < numColumns; col++) {
      const column = [];
      for (let row = 0; row < numRows; row++) {
        column.push(this.rows[row][col]);
      }
      columns.push(column);
    }
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
    this._columns = this.extractColumns();
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}
