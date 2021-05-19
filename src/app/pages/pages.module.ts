import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ForecastPageComponent } from './forecast-page/forecast-page.component';
import { RoutingModule } from '../routing/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';

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
    ReactiveFormsModule,
    PipesModule,
    ComponentsModule
  ],
  exports: [
    RoutingModule
  ]
})
export class PagesModule { }
