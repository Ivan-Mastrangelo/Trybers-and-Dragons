import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  // private _damage: EnergyType;
  static _constructorCounter = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._constructorCounter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._constructorCounter;
  }
}

export default Mage;