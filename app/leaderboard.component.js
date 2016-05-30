System.register(['@angular/core', './leaderboard.service', 'ng2-pagination'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, leaderboard_service_1, ng2_pagination_1;
    var LeaderboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (leaderboard_service_1_1) {
                leaderboard_service_1 = leaderboard_service_1_1;
            },
            function (ng2_pagination_1_1) {
                ng2_pagination_1 = ng2_pagination_1_1;
            }],
        execute: function() {
            LeaderboardComponent = (function () {
                function LeaderboardComponent(_leaderboardService) {
                    this._leaderboardService = _leaderboardService;
                    this.leaders = [];
                    this.displayLeaders("6", "rift-hardcore", "barbarian");
                }
                LeaderboardComponent.prototype.displayLeaders = function (season, rift, heroClass) {
                    var _this = this;
                    this._leaderboardService.getLeaders(season, rift, heroClass)
                        .subscribe(function (leaders) { return _this.leaders.push(leaders); });
                };
                ;
                LeaderboardComponent = __decorate([
                    core_1.Component({
                        selector: 'leaderboard',
                        templateUrl: 'app/templates/leaderboard.html',
                        providers: [leaderboard_service_1.LeaderboardService, ng2_pagination_1.PaginationService],
                        directives: [ng2_pagination_1.PaginationControlsCmp],
                        pipes: [ng2_pagination_1.PaginatePipe]
                    }), 
                    __metadata('design:paramtypes', [leaderboard_service_1.LeaderboardService])
                ], LeaderboardComponent);
                return LeaderboardComponent;
            }());
            exports_1("LeaderboardComponent", LeaderboardComponent);
        }
    }
});
//# sourceMappingURL=leaderboard.component.js.map