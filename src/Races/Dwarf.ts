import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static _consructorCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._consructorCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._consructorCounter;
  }
}

export default Dwarf;