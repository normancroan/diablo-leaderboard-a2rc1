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
    tableHeader = {
      heroClass: 'Barbarian',
      rift: 'Hardcore'
    };
    onLeaderboardChange(){
      const selection = (<HTMLInputElement>document.getElementById("leaderboardSelect")).value;
      this.leaders = [];
      this.displayLeaders("6","rift-hardcore",selection);
    }

    displayLeaders(season, rift, heroClass){
      this._leaderboardService.getLeaders(season, rift, heroClass)
        .subscribe(leaders => this.leaders.push(leaders));
    };

    constructor(private _leaderboardService: LeaderboardService){
      this.displayLeaders("6","rift-hardcore","barbarian");
    }


}
