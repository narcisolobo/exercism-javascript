// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

/**
 *
 * @param {number} width the width of the size object
 * @param {number} height the height of the size object
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

/**
 *
 * @param {number} newWidth the new width to set
 * @param {number} newHeight the new height to set
 * @returns {void}
 */
Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {void}
 */
export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

/**
 *
 * @param {number} newX the new x position to set
 * @param {number} newY the new y position to set
 * @returns {void}
 */
Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  /**
   *
   * @param {Size} size the new size
   * @returns {void}
   */
  resize(size) {
    const newWidth = Math.max(size.width, 1);
    const newHeight = Math.max(size.height, 1);

    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    this.size.width = Math.min(newWidth, maxWidth);
    this.size.height = Math.min(newHeight, maxHeight);
  }

  /**
   *
   * @param {Position} position the new position
   */
  move(position) {
    const newX = Math.max(0, position.x);
    const newY = Math.max(0, position.y);

    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    this.position.x = Math.min(newX, maxX);
    this.position.y = Math.min(newY, maxY);
  }
}

/**
 *
 * @param {ProgramWindow} programWindow the window to change
 * @returns {ProgramWindow}
 */
export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}
