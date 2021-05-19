import { OpenWeatherForecastResponse, WeatherConditions } from "src/app/models/open-weather";

export const testData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1587343959000,
      main: {
        temp: 293.55,
        feels_like: 293.13,
        temp_min: 293.55,
        temp_max: 294.05,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 976,
        humidity: 84,
        temp_kf: -0.5,
      },
      weather: [
        {
          id: 500,
          main: WeatherConditions.Rain,
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 38,
      },
      wind: {
        speed: 4.35,
        deg: 309,
        gust: 7.87,
      },
      visibility: 10000,
      pop: 0.49,
      rain: {
        '3h': 0.53,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-08-04 18:00:00",
    },
    {
      dt: 1587453959000,
      main: {
        temp: 30.55,
        feels_like: 28.13,
        temp_min: 30.55,
        temp_max: 32.05,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 976,
        humidity: 84,
        temp_kf: -0.5,
      },
      weather: [
        {
          id: 500,
          main: WeatherConditions.Clear,
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 38,
      },
      wind: {
        speed: 4.35,
        deg: 309,
        gust: 7.87,
      },
      visibility: 10000,
      pop: 0.49,
      rain: {
        '3h': 0.53,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-08-04 18:00:00",
    },
    {
      dt: 1587553959000,
      main: {
        temp: 30.55,
        feels_like: 28.13,
        temp_min: 30.55,
        temp_max: 32.05,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 976,
        humidity: 84,
        temp_kf: -0.5,
      },
      weather: [
        {
          id: 500,
          main: WeatherConditions.Rain,
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 38,
      },
      wind: {
        speed: 4.35,
        deg: 309,
        gust: 7.87,
      },
      visibility: 10000,
      pop: 0.49,
      rain: {
        '3h': 0.53,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-08-04 18:00:00",
    },
    {
      dt: 1587653959000,
      main: {
        temp: 30.55,
        feels_like: 28.13,
        temp_min: 30.55,
        temp_max: 32.05,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 976,
        humidity: 84,
        temp_kf: -0.5,
      },
      weather: [
        {
          id: 500,
          main: WeatherConditions.Clouds,
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 38,
      },
      wind: {
        speed: 4.35,
        deg: 309,
        gust: 7.87,
      },
      visibility: 10000,
      pop: 0.49,
      rain: {
        '3h': 0.53,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-08-04 18:00:00",
    },
    {
      dt: 1587753959000,
      main: {
        temp: 30.55,
        feels_like: 28.13,
        temp_min: 30.55,
        temp_max: 32.05,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 976,
        humidity: 84,
        temp_kf: -0.5,
      },
      weather: [
        {
          id: 500,
          main: WeatherConditions.Snow,
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 38,
      },
      wind: {
        speed: 4.35,
        deg: 309,
        gust: 7.87,
      },
      visibility: 10000,
      pop: 0.49,
      rain: {
        '3h': 0.53,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-08-04 18:00:00",
    },
  ],
  city: {
    id: 2643743,
    name: "Rancho Cordova",
    coord: {
      lat: 51.5073,
      lon: -0.1277,
    },
    country: "GB",
    timezone: 0,
    sunrise: 1578384285,
    sunset: 1578413272,
  }
} as OpenWeatherForecastResponse;
