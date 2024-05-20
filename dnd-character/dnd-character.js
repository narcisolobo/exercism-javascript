// @ts-check
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 *
 * @param {number} constitution the character's constitution
 * @returns {number}
 */
export const abilityModifier = (constitution) => {
  if (constitution < 3) {
    throw new Error('Ability scores must be at least 3');
  }
  if (constitution > 18) {
    throw new Error('Ability scores can be at most 18');
  }

  return Math.floor((constitution - 10) / 2);
};

export class Character {
  static rollDie = () => Math.floor(Math.random() * 6) + 1;

  static rollAbility() {
    let rolls = Array.from({ length: 4 }, this.rollDie);
    const [_, ...highest] = rolls.sort();
    return highest.reduce((total, roll) => total + roll);
  }

  constructor() {
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._charisma = Character.rollAbility();
    this._hitpoints = 10 + abilityModifier(this._constitution);
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return this._hitpoints;
  }
}
