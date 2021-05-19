import { Pipe, PipeTransform } from "@angular/core";
import { WeatherConditions } from "../../models/open-weather";

@Pipe({
  name: "weatherIcon",
})
export class WeatherIconPipe implements PipeTransform {
  transform(value: WeatherConditions): string | null {
    switch (value) {
      case WeatherConditions.Clear:
        return "https://www.angulartraining.com/images/weather/sun.png";
      case WeatherConditions.Snow:
        return "https://www.angulartraining.com/images/weather/snow.png";
      case WeatherConditions.Rain:
        return "https://www.angulartraining.com/images/weather/rain.png";
      case WeatherConditions.Clouds:
        return "https://www.angulartraining.com/images/weather/clouds.png";
      default:
        return null;
    }
  }
}
