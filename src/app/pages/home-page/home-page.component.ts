import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LocalStorageService } from "src/app/services/local-storage/local-storage.service";
import { delay, shareReplay, switchMap, tap } from "rxjs/operators";
import { OpenWeatherHttpService } from "src/app/services/http/open-weather-http.service";
import { BehaviorSubject, forkJoin, Observable, of } from "rxjs";
import { OpenWeatherZipCodeResponse } from "src/app/models/open-weather";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  homeForm!: FormGroup;

  cachedData$: Observable<{
    response: OpenWeatherZipCodeResponse;
    zipCode: string;
  }>[] = [];

  dataLoaded = new BehaviorSubject<boolean>(false);

  openWeatherZipCodes$ = this.localStorageService.zipCodes$.pipe(
    delay(0),
    tap(() => this.dataLoaded.next(false)),
    switchMap((zipCodes) => {
      return zipCodes.length
        ? forkJoin(
            zipCodes.map((zipCode, index) => {
              if (
                (!this.zipCode || this.zipCode === zipCode) &&
                this.cachedData$.length < zipCodes.length
              ) {
                const httpCall = this.openWeatherHttpService
                  .fetchByZipCode(zipCode)
                  .pipe(shareReplay(1));
                this.cachedData$.push(httpCall);
                return httpCall;
              } else {
                return this.cachedData$[index];
              }
            })
          ).pipe(tap(() => this.dataLoaded.next(true)))
        : of(null);
    }),
    tap(() => this.dataLoaded.next(true))
  );

  private zipCode: string = "";

  constructor(
    private localStorageService: LocalStorageService,
    private openWeatherHttpService: OpenWeatherHttpService
  ) {}

  ngOnInit(): void {
    this.homeForm = new FormGroup({
      zipCode: new FormControl(null, [
        Validators.pattern("^[0-9]{5}(?:-[0-9]{4})?$"),
      ]),
    });

    this.localStorageService.loadZipCodes();
  }

  onSubmit(): void {
    this.zipCode = this.homeForm.get("zipCode")?.value;
    this.localStorageService.addZipCode(this.zipCode);
  }

  onDelete(zipCode: string, index: number): void {
    this.localStorageService.deleteZipCode(zipCode);
    this.cachedData$.splice(index, 1);
  }

  get dataLoaded$(): Observable<boolean> {
    return this.dataLoaded.asObservable();
  }
}
