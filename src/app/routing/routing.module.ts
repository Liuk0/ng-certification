import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { ForecastPageComponent } from "../pages/forecast-page/forecast-page.component";
import { NotFoundPageComponent } from "../pages/not-found-page/not-found-page.component";

const routes: Routes = [
  { 
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomePageComponent,
  },
  {
    path: "forecast/:zipcode",
    component: ForecastPageComponent,
  },
  {
    path: "not-found",
    component: NotFoundPageComponent,
  },
  {
    path: "**",
    component: NotFoundPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
