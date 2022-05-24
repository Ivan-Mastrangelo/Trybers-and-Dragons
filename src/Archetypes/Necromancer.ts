import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  // private _damage: EnergyType;
  static _constructorCounter = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._constructorCounter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._constructorCounter;
  }
}

export default Necromancer;