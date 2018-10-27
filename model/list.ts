import * as localforage from 'localforage';
import 'localforage-getitems';

export default class List {
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

  public setItem(key, value) {
    return this.myLF.setItem(key, value);
  }

  public removeItem(key) {
    return this.myLF.removeItem(key);
  }
}
