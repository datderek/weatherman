export default class WeatherAPIFacade {
  static API_KEY = process.env.API_KEY;
  static API_URL = 'http://api.weatherapi.com/v1/forecast.json';

  static processWeatherData(data) {
    const processedData = {};

    processedData.current = {
      'location': data.location.name,
      'region': data.location.region,
      'condition': data.current.condition.text,
      'conditionCode': data.current.condition.code,
      'temperature': data.current.temp_f,
      'time': data.current.last_updated,
      'isDay': data.current.is_day,
    }

    processedData.additionalDetails = {
      'uvIndex': data.current.uv,
      'wind': data.current.wind_mph,
      'humidity': data.current.humidity,
      'visibility': data.current.vis_miles,
      'pressure': data.current.pressure_in,
    }

    processedData.hourly = [];
    data.forecast.forecastday[0].hour.forEach((hour) => {
      const hourlyCondition = {
        'time': hour.time,
        'temperature': hour.temp_f,
        'conditionCode': hour.condition.code,
        'isDay': hour.is_day,
      }
      processedData.hourly.push(hourlyCondition);
    })

    processedData.forecast = [];
    data.forecast.forecastday.forEach((day) => {
      const forecastDay = {
        "date": day.date,
        "conditionCode": day.day.condition.code,
        "maxTemp": day.day.maxtemp_f,
        "minTemp": day.day.mintemp_f,
      }
      processedData.forecast.push(forecastDay);
    })

    console.log(JSON.stringify(processedData));
    return processedData;
  }

  static async fetchWeatherData(location) {
    const response = await fetch(`${this.API_URL}?key=${this.API_KEY}&q=${location}&days=5&aqi=no&alerts=no`, { mode: 'cors' });
    return await response.json();
  }

  static async getWeather(location) {
    return this.fetchWeatherData(location)
      .then(data => this.processWeatherData(data))
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