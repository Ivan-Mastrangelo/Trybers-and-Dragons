// import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player2: Fighter;
  constructor(protected player: Fighter, player2: Fighter) {
    super(player);
    this.player = player;
    this._player2 = player2;
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this._player2.lifePoints > 0) {
      this.round();
    }
    return super.fight();
  }

  round() {
    this.player.attack(this._player2);
    this._player2.attack(this.player);
  }
}

export default PVP;