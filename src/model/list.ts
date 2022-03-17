import * as localforage from 'localforage';
import 'localforage-getitems';
import { nanoid } from 'nanoid';

export type Set = {
  name: string;
  tempo: number;
  beat: string;
};

export class List {
  private _localforage: LocalForage;

  constructor() {
    this._localforage = localforage.createInstance({
      name: 'airbeat',
      version: 1.0,
      storeName: 'music_list',
      description: 'List of musics saved as',
    });
  }

  public length() {
    return this._localforage.length();
  }

  public getItems() {
    return this._localforage.getItems() as Promise<Record<string, Set>>;
  }

  public setItem(setData: Set) {
    return this._localforage.setItem(nanoid(), setData);
  }

  public removeItem(key: string) {
    return this._localforage.removeItem(key);
  }
}
