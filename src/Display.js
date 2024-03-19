import { format } from 'date-fns';
import WeatherIcon from './WeatherIcon';

export default class Display {
  static currentCondition = document.getElementById('current-condition');
  static currentLocation = document.getElementById('current-location');
  static currentTemperature = document.getElementById('current-temperature');
  static currentIcon = document.getElementById('current-icon');
  static details = document.getElementById('details');
  static hourlyList = document.getElementById('hourly-list');
  static additionalDetails = document.getElementsByClassName('details');
  static forecast = document.getElementById('forecast');

  static displayCurrent(data) {
    this.currentLocation.textContent = `${data.location}, ${data.region}`;
    this.currentCondition.textContent = `${data.condition}`;
    this.currentTemperature.textContent = `${data.temperature} °F`;
    this.currentIcon.appendChild(WeatherIcon.getIcon(data.conditionCode, data.isDay));

    const hour = new Date(data.time).getHours();
    this.details.className = "";
    this.details.classList.add(`g${hour}`);
  }

  static displayAdditionalDetails(data) {
    const uv = this.additionalDetails[0].lastChild;
    uv.textContent = data.uvIndex;
    const wind = this.additionalDetails[1].lastChild;
    wind.textContent = `${data.wind} mph`;
    const humidity = this.additionalDetails[2].lastChild;
    humidity.textContent = `${data.humidity} %`;
    const visibility = this.additionalDetails[3].lastChild;
    visibility.textContent = `${data.visibility} miles`;
    const pressure = this.additionalDetails[4].lastChild;
    pressure.textContent = `${data.pressure} in`;
  }

  static displayHourly(data) {
    data.forEach((hourlyData) => {
      const time = document.createElement('span');
      time.textContent = (hourlyData.time.split(' '))[1];
      const hour = new Date(hourlyData.time).getHours();
      const weatherIcon = document.createElement('div');
      weatherIcon.appendChild(WeatherIcon.getIcon(hourlyData.conditionCode, hourlyData.isDay));
      weatherIcon.classList.add(`g${hour}`);
      const temperature = document.createElement('span');
      temperature.textContent = `${hourlyData.temperature} °F`;
      
      const hourlyDetail = document.createElement('li');
      hourlyDetail.appendChild(time);
      hourlyDetail.appendChild(weatherIcon);
      hourlyDetail.appendChild(temperature);
      hourlyDetail.classList.add("hourly-details")
      this.hourlyList.appendChild(hourlyDetail);
    })
  }

  static displayForecast(data) {
    data.forEach((forecastData) => {
      const date = document.createElement('div');
      date.textContent = format(new Date(forecastData.date), 'M/dd');
      const weatherIcon = document.createElement('div');
      weatherIcon.appendChild(WeatherIcon.getIcon(forecastData.conditionCode));
      const maxTemp = document.createElement('div');
      maxTemp.textContent = `${forecastData.maxTemp} °F`;
      const minTemp = document.createElement('div');
      minTemp.textContent = `${forecastData.minTemp} °F`;
      const temperatures = document.createElement('div');
      temperatures.appendChild(maxTemp);
      temperatures.appendChild(minTemp);
      temperatures.classList.add('forecast-temperatures');

      const forecastDetail = document.createElement('div');
      forecastDetail.appendChild(date);
      forecastDetail.appendChild(weatherIcon);
      forecastDetail.appendChild(temperatures);
      forecastDetail.classList.add('forecast-details')
      this.forecast.appendChild(forecastDetail);
    })
  }

  static clearDisplay() {
    [this.forecast, this.hourlyList, this.currentCondition, this.currentLocation, this.currentTemperature, this.currentIcon].forEach((element) => {
      element.replaceChildren();
    })
  }
  
  static updateDisplay(data) {
    this.clearDisplay();
    this.displayCurrent(data.current);
    this.displayAdditionalDetails(data.additionalDetails);
    this.displayHourly(data.hourly);
    this.displayForecast(data.forecast);
  }
}