System.register(['@angular/http', 'rxjs/add/operator/map', 'rxjs/add/operator/filter', 'rxjs/add/operator/mergeMap', '@angular/core'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var LeaderboardService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LeaderboardService = (function () {
                function LeaderboardService(_http) {
                    this._http = _http;
                }
                LeaderboardService.prototype.getLeaders = function (season) {
                    console.log(season);
                    this._seasonurl = "https://us.api.battle.net/data/d3/season/" + season + "/leaderboard/rift-dh?access_token=sttjyvptcz9cspmrujtnjywy";
                    var filterByParagon = function (e) { return (e.player[0].data[5].number <= 800); };
                    var unwrapPlayer = function (e) { return e.player[0].data[2]["string"] + " Player: " +
                        e.player[0].data[0]["string"] + " Paragon:" +
                        e.player[0].data[5]["number"] + " Cleared GR: " +
                        e["data"][1]["number"]; }; //RiftLevel
                    var Player = function (heroClass, battleTag, paragon, riftLevel, riftTime) {
                        this.heroClass = heroClass;
                        this.battleTag = battleTag;
                        this.paragon = paragon;
                        this.riftLevel = riftLevel;
                        this.riftTime = riftTime;
                    };
                    var createPlayer = function (e) { return new Player(e.player[0].data[2]["string"], e.player[0].data[0]["string"], e.player[0].data[5]["number"], e.data[1]["number"], e.data[2]["timestamp"]); };
                    return this._http.get(this._seasonurl)
                        .map(function (res) { return res.json(); })
                        .mergeMap(function (item) { return item.row; })
                        .filter(filterByParagon)
                        .map(createPlayer);
                };
                LeaderboardService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LeaderboardService);
                return LeaderboardService;
            }());
            exports_1("LeaderboardService", LeaderboardService);
        }
    }
});
//# sourceMappingURL=leaderboard.service.js.map