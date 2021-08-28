import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  constructor() {
    this.gameSaving = {};
  }

  async load() {
    try {
      const response = await read();
      const result = await json(response);
      this.gameSaving = result;
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
