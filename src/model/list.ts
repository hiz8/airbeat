import * as localforage from 'localforage';
import 'localforage-getitems';
import { nanoid } from 'nanoid';

export type TSet = {
  name: string;
  tempo: number;
  beat: string;
};

export class List {
  private myLF: any;

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
    return this.myLF.getItems();
  }

  public setItem(setData: TSet) {
    return this.myLF.setItem(nanoid(), setData);
  }

  public removeItem(key: string) {
    return this.myLF.removeItem(key);
  }
}
