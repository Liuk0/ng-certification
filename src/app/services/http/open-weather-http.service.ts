import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

function getLocalStorage(): Storage {
  return localStorage;
}

@Injectable({
  providedIn: "root"
})
export class OpenWeatherHttpService {
  constructor(private httpClient: HttpClient) {

  }

  //TODO MAP CALL
  // fetchData(zipCode: string): Observable<any> {
    
  // }
}
