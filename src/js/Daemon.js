/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-underscore-dangle */
export default class Daemon {
  constructor(attack) {
    this.initialAttack = attack;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  set attack(distance) {
    if (distance >= 10 || distance < 1) {
      return this._attack = 0;
    }
    const percent = 1 - (distance - 1) / 10;
    this._attack = this.initialAttack * percent;

    if (this._stoned) {
      this._attack -= Math.log2(distance) * 5;
    }
  }

  get attack() {
    return this._attack;
  }
}
