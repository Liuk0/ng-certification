export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: WeatherConditions;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Clouds {
  all: number;
}

export interface Rain {
  '3h': number;
}

export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
  pod: string;
}

export interface OpenWeatherZipCodeResponse {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain: Rain;
  sys: Sys;
  dt_txt: string;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface OpenWeatherForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}

export enum WeatherConditions {
  Thunderstorm = 'Thunderstorm',
  Drizzle = 'Drizzle',
  Rain = 'Rain',
  Snow = 'Snow',
  Clear = 'Clear',
  Clouds = 'Clouds',
}
