import json from './parser';
import read from './reader';
import GameSaving from './gamesaving';

export default class GameSavingLoader {

    static load() {
        (async () => {
            try {
                const response = await read();
                console.log(response);
                const result = await json(response);
                console.log(result);
                return result;
                //const gameSaving = new GameSaving (result);
                //return gameSaving;
            } catch (error) {
                throw new Error(error.message);
            }
        })();
    }
}