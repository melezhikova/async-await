import GameSavingLoader from './GameSavingLoader';
import GameSaving from './gamesaving';

const gameSaving1 = new GameSaving({"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}})
console.log(gameSaving1);

const saving = new GameSavingLoader.load();
console.log(saving);
const gameSaving2 = new GameSaving(saving);
console.log(gameSaving2);


// const gameSaving2 = new GameSaving(GameSavingLoader.load());
// console.log(gameSaving2);
