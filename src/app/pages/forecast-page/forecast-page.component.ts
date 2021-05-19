import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { catchError, switchMap } from "rxjs/operators";
import { OpenWeatherHttpService } from "../../services/http/open-weather-http.service";
import { EMPTY, of } from "rxjs";
import { testData } from "./test-data";

@Component({
  selector: "app-forecast-page",
  templateUrl: "./forecast-page.component.html",
  styleUrls: ["./forecast-page.component.css"],
})
export class ForecastPageComponent {
  forecastData$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) => {
      const zipCode = params.get("zipcode");
      return zipCode
        ? this.openWeatherHttpService
            .fetchForecast(zipCode)
            .pipe(catchError(() => of(testData)))
        : EMPTY;
    })
  );

  constructor(
    private route: ActivatedRoute,
    private openWeatherHttpService: OpenWeatherHttpService
  ) {}
}
