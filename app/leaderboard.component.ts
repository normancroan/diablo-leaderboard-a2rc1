import {Component} from '@angular/core';
import {LeaderboardService} from './leaderboard.service';
import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';

@Component({
  selector: 'leaderboard',
  templateUrl: 'app/templates/leaderboard.html',
  providers: [LeaderboardService, PaginationService],
  directives: [PaginationControlsCmp],
  pipes: [PaginatePipe]
})
export class LeaderboardComponent {

    leaders = [];
    hcLeaders = [];
    onLeaderboardChange(){
      const selection = (<HTMLInputElement>document.getElementById("leaderboardSelect")).value;
      this.leaders = [];
      this.hcLeaders = [];
      this.displayLeaders("6","rift",selection);
      this.displayHardcoreLeaders("6","rift-hardcore",selection);
    }

    displayLeaders(season, rift, heroClass){
      this._leaderboardService.getLeaders(season, rift, heroClass)
        .subscribe(leaders => this.leaders.push(leaders));
    };

    displayHardcoreLeaders(season, rift, heroClass){
      this._leaderboardService.getLeaders(season, rift, heroClass)
        .subscribe(leaders => this.hcLeaders.push(leaders));
    };



    constructor(private _leaderboardService: LeaderboardService){
      this.displayLeaders("6","rift","barbarian");
      this.displayHardcoreLeaders("6","rift-hardcore","barbarian");
    }


}
