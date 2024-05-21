/// <reference path="./global.d.ts" />
//
// @ts-check

const priceMap = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10,
  ExtraSauce: 1,
  ExtraToppings: 2,
};

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  /**
   *
   * @param {number} price
   * @param {Extra[]} extras
   * @returns
   */
  const calculateTotal = (price = 0, extras) => {
    if (extras.length === 0) {
      return price;
    }

    const [firstExtra, ...remainingExtras] = extras;
    return calculateTotal(price + priceMap[firstExtra], remainingExtras);
  };

  return calculateTotal(priceMap[pizza], extras);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  /**
   *
   * @param {PizzaOrder} pizzaOrder
   */
  const orderTotal = (pizzaOrder) => {
    let total = priceMap[pizzaOrder.pizza];
    return (total += pizzaOrder.extras
      .map((extra) => priceMap[extra])
      .reduce((total, currentPrice) => total + currentPrice, 0));
  };

  return pizzaOrders.reduce(
    (total, currentOrder) => total + orderTotal(currentOrder),
    0
  );
}
