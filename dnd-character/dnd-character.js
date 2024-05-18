//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (constitution) => {
  if (constitution < 3) {
    throw new Error('Ability scores must be at least 3');
  }
  if (constitution > 18) {
    throw new Error('Ability scores can be at most 18');
  }

  constitution -= 10;
  constitution /= 2;
  constitution = Math.floor(constitution);
  return constitution;
};

export class Character {
  static rollAbility() {
    let rolls = [];
    for (let i = 1; i <= 4; i++) {
      rolls.push(Math.floor(Math.random() * 6) + 1);
    }
    rolls = rolls.sort();
    let sum = 0;
    for (let i = 1; i < rolls.length; i++) {
      sum += rolls[i];
    }
    return sum;
  }

  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
    this.hitpoints = 10 + abilityModifier(this.constitution);
  }

  get strength() {
    return this.strength;
  }

  get dexterity() {
    return this.dexterity;
  }

  get constitution() {
    return this.constitution;
  }

  get intelligence() {
    return this.intelligence;
  }

  get wisdom() {
    return this.wisdom;
  }

  get charisma() {
    return this.charisma;
  }

  get hitpoints() {
    return this.hitpoints;
  }
}
