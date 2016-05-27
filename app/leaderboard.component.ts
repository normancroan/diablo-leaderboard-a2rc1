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
    displayLeaders(season){
      this._leaderboardService.getLeaders(season)
        .subscribe(leaders => this.leaders.push(leaders));
    };

    constructor(private _leaderboardService: LeaderboardService){
      this.displayLeaders(6);
    }


}
