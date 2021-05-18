import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ForecastPageComponent } from './forecast-page/forecast-page.component';
import { RoutingModule } from '../routing/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    HomePageComponent,
    ForecastPageComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RoutingModule
  ]
})
export class PagesModule { }
