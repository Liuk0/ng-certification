import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LocalStorageService } from "src/app/services/local-storage/local-storage.service";
import { switchMap } from "rxjs/operators";
import { OpenWeatherHttpService } from "src/app/services/http/open-weather-http.service";
import { forkJoin } from "rxjs";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  homeForm!: FormGroup;

  openWeatherZipCodes$ = this.localStorageService.zipCodes$.pipe(
    switchMap((zipCodes) =>
      forkJoin(
        zipCodes.map((zipCode) =>
          this.openWeatherHttpService.fetchByZipCode(zipCode)
        )
      )
    )
  );

  constructor(
    private localStorageService: LocalStorageService,
    private openWeatherHttpService: OpenWeatherHttpService
  ) {}

  ngOnInit(): void {
    this.homeForm = new FormGroup({
      zipCode: new FormControl(null, [Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]),
    });

    this.localStorageService.loadZipCodes();
  }

  onSubmit(): void {
    const zipCode = this.homeForm.get("zipCode")?.value;
    this.localStorageService.addZipCode(zipCode);
  }

  onDelete(zipCode: string): void {
    this.localStorageService.deleteZipCode(zipCode);
  }
}
