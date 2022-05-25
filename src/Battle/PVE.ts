import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _figthersAndMonsters: SimpleFighter[];
  constructor(protected player: Fighter, figthersAndMonsters: SimpleFighter[]) {
    super(player);
    this.player = player;
    this._figthersAndMonsters = figthersAndMonsters;
  }

  fight(): number {
    while (this.player.lifePoints > 0
      && this._figthersAndMonsters[0].lifePoints > 0) {
      this.round();
    }
    return super.fight();
  }

  round() {
    this.player.attack(this._figthersAndMonsters[0]);
    this._figthersAndMonsters[0].attack(this.player);
  }
}

export default PVE;