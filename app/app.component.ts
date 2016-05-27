import {Component, Input} from '@angular/core';
import {LeaderboardComponent} from './leaderboard.component';
import {LeaderboardService} from './leaderboard.service';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app-full.html',
    directives: [LeaderboardComponent],
    providers: [HTTP_PROVIDERS]
})
export class AppComponent { }
