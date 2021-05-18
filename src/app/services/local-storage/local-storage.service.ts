import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { LocalStorageRefService } from "./local-storage-ref.service";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  private _localStorage: Storage;
  private _zipCodes$ = new BehaviorSubject<string[]>([]);

  constructor(private _localStorageRefService: LocalStorageRefService) {
    this._localStorage = _localStorageRefService.localStorage;
  }

  addZipCode(value: string) {
    const currentItems = this._localStorage.getItem("zipCodes");
    if(currentItems) {
      const data = JSON.parse(currentItems) as string[];
      data.push(value);
      const jsonData = JSON.stringify(data);
      this._localStorage.setItem("zipCodes", jsonData);
      this._zipCodes$.next(data);
    } else {
      const data = [value];
      const jsonData = JSON.stringify(data);
      this._localStorage.setItem("zipCodes", jsonData);
      this._zipCodes$.next(data);
    }
  }

  loadZipCodes() {
    const currentItems = this._localStorage.getItem("zipCodes");
    if (currentItems) {
      const data = JSON.parse(currentItems);
      this._zipCodes$.next(data);
    }
  }

  clearZipCodes() {
    this._localStorage.removeItem("zipCodes");
    this._zipCodes$.next([]);
  }

  clearAllLocalStorage() {
    this._localStorage.clear();
    this._zipCodes$.next([]);
  }

  get zipCodes$(): Observable<any> {
    return this._zipCodes$.asObservable();
  }
}
