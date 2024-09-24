import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get(key: string) :string | null {
    return localStorage.getItem(key);
  }

  save(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  clear():void{
    localStorage.clear();
  }
}
