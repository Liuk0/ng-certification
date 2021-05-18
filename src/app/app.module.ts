import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from "./app.component";
import { PagesModule } from "./pages/pages.module";

@NgModule({
  imports: [BrowserModule, HttpClientModule, PagesModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
