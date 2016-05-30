import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import {Injectable} from '@angular/core';

@Injectable()
export class LeaderboardService {
  private _seasonurl;

  constructor(private _http: Http){}

  getLeaders(season: String, rift: String, heroClass: string){
    this._seasonurl = "https://us.api.battle.net/data/d3/season/"+season+"/leaderboard/"+rift+"-"+heroClass+"?access_token=sttjyvptcz9cspmrujtnjywy";

    const filterByParagon = e => (e.player[0].data[5].number <= 800);

    var Player = function(heroClass: string, battleTag: string, paragon: string, riftLevel: string, riftTime: string, index){
      this.heroClass = heroClass;
      this.battleTag = battleTag;
      this.paragon = paragon;
      this.riftLevel = riftLevel;
      this.riftTime = riftTime;
      this.playerRank = index;
    }

    const createPlayer =
      (e,i) => new Player(e.player[0].data[2]["string"],e.player[0].data[0]["string"],e.player[0].data[5]["number"],e.data[1]["number"],e.data[2]["timestamp"], i)

      return this._http.get(this._seasonurl)
      .map(res => res.json())
      .mergeMap(item => item.row)
      .filter(filterByParagon)
      .map(createPlayer);
  }
}
