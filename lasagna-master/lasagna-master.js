/// <reference path="./global.d.ts" />
// @ts-check

/**
 * @param {number | undefined} remainingTime
 * @return {string}
 */
export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return 'Lasagna is done.';
  } else if (!remainingTime) {
    return 'You forgot to set the timer.';
  }
  return 'Not done, please wait.';
}

/**
 *
 * @param {string[]} layers
 * @param {number | undefined} averageMinutes
 */
export function preparationTime(layers, averageMinutes = 2) {
  return averageMinutes * layers.length;
}

/**
 *
 * @param {string[]} layers
 * @return {Record<string, number>}
 */
export function quantities(layers) {
  const required = {
    noodles: 0,
    sauce: 0,
  };

  for (const layer of layers) {
    switch (layer.toLowerCase()) {
      case 'sauce':
        required.sauce += 0.2;
        break;
      case 'noodles':
        required.noodles += 50;
      default:
        break;
    }
  }

  return required;
}

/**
 *
 * @param {string[]} friendsList
 * @param {string[]} myList
 * @returns void
 */
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

/**
 *
 * @param {Record<string, number>} recipe
 * @param {number} portions
 * @returns {Record<string, number>}
 */
export function scaleRecipe(recipe, portions) {
  /** @type {Record<string, number>} */
  const newRecipe = {};

  for (const key in recipe) {
    if (recipe.hasOwnProperty(key)) {
      newRecipe[key] = recipe[key] * (portions / 2);
    }
  }

  return newRecipe;
}
