import * as localforage from 'localforage';
import 'localforage-getitems';
import { nanoid } from 'nanoid';

export type Set = {
  name: string;
  tempo: number;
  beat: string;
};

export class List {
  private myLF: LocalForage;

  constructor() {
    this.myLF = localforage.createInstance({
      name: 'metro',
      version: 1.0,
      storeName: 'music_list',
      description: '名前を付けて保存した楽曲リスト',
    });
  }

  public length() {
    return this.myLF.length();
  }

  public getItems() {
    return this.myLF.getItems() as Promise<Record<string, Set>>;
  }

  public setItem(setData: Set) {
    return this.myLF.setItem(nanoid(), setData);
  }

  public removeItem(key: string) {
    return this.myLF.removeItem(key);
  }
}
