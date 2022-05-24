import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static _consructorCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._consructorCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._consructorCounter;
  }
}

export default Elf;