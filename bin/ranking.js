"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let position;
let playerName;
let finishedGame;
let ranking;
let hallOfFame = [];
position = 1;
playerName = "Bruno Krebs";
finishedGame = true;
ranking = [position, playerName, finishedGame];
hallOfFame.push(ranking);
position = 2;
playerName = "Carl Landry";
finishedGame = true;
ranking = [position, playerName, finishedGame];
hallOfFame.push(ranking);
function printRankings(rankings) {
    for (let ranking of rankings) {
        console.log(ranking);
    }
}
exports.printRankings = printRankings;
printRankings(hallOfFame);
