import { Component } from "@angular/core";

@Component({
  selector: "app-loader",
  template: `
    <div class="wrapper-overlay">
      <div class="overlay">
        <div class="wrapper-loader">
          <div class="loader"></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./loader.component.css"],
})
export class LoaderComponent {
}
