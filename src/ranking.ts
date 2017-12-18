export{printRankings, RankingTuple};

type RankingTuple = [number, string, boolean];

let position: number;
let playerName: string;
let finishedGame: boolean;
let ranking: RankingTuple;
let hallOfFame: Array<RankingTuple> = [];

position = 1;
playerName = "Bruno Krebs";
finishedGame= true;
ranking = [position, playerName, finishedGame];
hallOfFame.push(ranking);

position = 2;
playerName = "Carl Landry";
finishedGame= true;
ranking = [position, playerName, finishedGame];
hallOfFame.push(ranking);



function printRankings(rankings: Array<RankingTuple>): void{
  for (let ranking of rankings){
    console.log(ranking);
  }
}

printRankings(hallOfFame);
