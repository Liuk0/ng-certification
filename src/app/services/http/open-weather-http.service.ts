import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import {
  OpenWeatherZipCodeResponse,
  OpenWeatherForecastResponse,
} from "../../models/open-weather";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class OpenWeatherHttpService {
  constructor(private httpClient: HttpClient) {}

  fetchByZipCodeBackup(zipCode: string): Observable<{
    response: OpenWeatherZipCodeResponse;
    zipCode: string;
  }> {
    return this.httpClient
      .get<OpenWeatherZipCodeResponse>(
        `https://lp-store.herokuapp.com/weather?zipcode=${zipCode}`
      )
      .pipe(
        map((data) => ({
          response: data,
          zipCode,
        }))
      );
  }

  fetchByZipCode(zipCode: string): Observable<{
    response: OpenWeatherZipCodeResponse;
    zipCode: string;
  }> {
    return this.httpClient
      .get<OpenWeatherZipCodeResponse>(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${environment.APP_ID}`
      )
      .pipe(
        map((data) => ({
          response: data,
          zipCode,
        })),
        catchError(() => this.fetchByZipCodeBackup(zipCode))
      );
  }

  fetchForecast(zipCode: string): Observable<OpenWeatherForecastResponse> {
    return this.httpClient.get<OpenWeatherForecastResponse>(
      `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=${environment.APP_ID}`
    );
  }
}
