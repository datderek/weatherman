export default class WeatherAPIFacade {
  static API_KEY;
  static API_URL = 'http://api.weatherapi.com/v1/forecast.json';

  static processWeatherData(data) {
    const processedData = {};
    processedData.currentTemp = data.current.temp_f;
    processedData.forecast = [];

    console.log(data);
    
    data.forecast.forecastday.forEach((data) => {
      const forecastDay = {}
      forecastDay.date = data.date;
      forecastDay.maxTemp = data.day.maxtemp_f;
      forecastDay.minTemp = data.day.mintemp_f;
      processedData.forecast.push(forecastDay);
    })

    return processedData;
  }

  static async fetchWeatherData(location) {
    const response = await fetch(`${this.API_URL}?key=${this.API_KEY}&q=${location}&days=3&aqi=no&alerts=no`, { mode: 'cors' });
    return await response.json();
  }

  static getWeather(location) {
    this.fetchWeatherData(location)
      .then(data => this.processWeatherData(data))
      .then(data => console.log(JSON.stringify(data)));
  }

  static getWeatherPromise(location) {
    return new Promise(function(resolve, reject) {
      fetch(`${WeatherAPIFacade.API_URL}?key=${WeatherAPIFacade.API_KEY}&q=${location}&days=3`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          resolve(data);
        })
    })
  }
}