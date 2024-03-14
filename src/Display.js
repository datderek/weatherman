export default class Display {
  static details = document.getElementById('details');
  static hourly = document.getElementById('hourly');
  static additionalDetails = document.getElementById('additional-details');
  static forecast = document.getElementById('forecast');

  static displayCurrent(data) {
    const location = document.createElement('div');
    location.textContent = `${data.location}, ${data.region}`;
    const condition = document.createElement('div');
    condition.textContent = `${data.condition}`;
    const temperature = document.createElement('div');
    temperature.textContent = `${data.temperature}`;

    this.details.appendChild(location);
    this.details.appendChild(condition);
    this.details.appendChild(temperature);
  }

  static displayAdditionalDetails(data) {
    const uv = document.createElement('div');
    uv.textContent = `UV: ${data.uvIndex}`;
    const wind = document.createElement('div');
    wind.textContent = `Wind: ${data.wind}`;
    const humidity = document.createElement('div');
    humidity.textContent = `Humidity: ${data.humidity}`;
    const visibility = document.createElement('div');
    visibility.textContent = `Visibility: ${data.visibility}`;
    const pressure = document.createElement('div');
    pressure.textContent = `Pressure: ${data.pressure}`;

    this.additionalDetails.appendChild(uv);
    this.additionalDetails.appendChild(wind);
    this.additionalDetails.appendChild(humidity);
    this.additionalDetails.appendChild(visibility);
    this.additionalDetails.appendChild(pressure);
  }

  static displayHourly(data) {
    data.forEach((hourlyData) => {
      const container = document.createElement('div');
      container.textContent = `${hourlyData.time} - ${hourlyData.condition} - ${hourlyData.temperature}`;
      this.hourly.appendChild(container);
    })
  }

  static displayForecast(data) {
    data.forEach((forecastData) => {
      const container = document.createElement('div');
      container.textContent = `${forecastData.date} - ${forecastData.minTemp}/${forecastData.maxTemp}`;
      this.forecast.appendChild(container);
    })
  }

  static displayForecastDay(data) {

  }

  static clearDisplay() {
    [this.details, this.hourly, this.additionalDetails, this.forecast].forEach((element) => {
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