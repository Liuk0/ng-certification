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

  addZipCode(zipCode: string): void {
    const currentItems = this._localStorage.getItem("zipCodes");
    if(currentItems) {
      const data = JSON.parse(currentItems) as string[];
      if(data.indexOf(zipCode) === -1) {
        data.push(zipCode);
        const jsonData = JSON.stringify(data);
        this._localStorage.setItem("zipCodes", jsonData);
        this._zipCodes$.next(data);
      }
    } else {
      const data = [zipCode];
      const jsonData = JSON.stringify(data);
      this._localStorage.setItem("zipCodes", jsonData);
      this._zipCodes$.next(data);
    }
  }

  deleteZipCode(zipCode: string): void {
    const currentItems = this._localStorage.getItem("zipCodes") as string;
    const data = JSON.parse(currentItems) as string[];
    const dataFiltered = data.filter((el) => el !== zipCode);
    const jsonData = JSON.stringify(dataFiltered);
    this._localStorage.setItem("zipCodes", jsonData);
    this._zipCodes$.next(dataFiltered);
  }

  loadZipCodes(): void {
    const currentItems = this._localStorage.getItem("zipCodes");
    if (currentItems) {
      const data = JSON.parse(currentItems);
      this._zipCodes$.next(data);
    }
  }

  clearZipCodes(): void {
    this._localStorage.removeItem("zipCodes");
    this._zipCodes$.next([]);
  }

  clearAllLocalStorage(): void {
    this._localStorage.clear();
    this._zipCodes$.next([]);
  }

  get zipCodes$(): Observable<string[]> {
    return this._zipCodes$.asObservable();
  }
}
