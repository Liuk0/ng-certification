import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { WeatherIconPipe } from './weather-icon/weather-icon.pipe';
import { CustomDatePipe } from './custom-date-pipe/custom-date.pipe';
import { CustomNumberPipe } from './custom-number-pipe/custom-number.pipe';

@NgModule({
  declarations: [
    WeatherIconPipe,
    CustomDatePipe,
    CustomNumberPipe
  ],
  exports: [
    WeatherIconPipe,
    CustomDatePipe,
    CustomNumberPipe,
    DecimalPipe,
  ],
  providers: [
    WeatherIconPipe,
    CustomDatePipe,
    CustomNumberPipe,
    DecimalPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
