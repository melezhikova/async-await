import json from './parser';
import read from './reader';
import GameSaving from './gamesaving';

export default class GameSavingLoader {

  async load() {
    try {
      const response = await read();
      const result = await json(response);
      return new GameSaving (result);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
