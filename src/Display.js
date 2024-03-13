export default class Display {
  static today = document.getElementById('today');
  static secondDay = document.getElementById('second-day');
  static thirdDay = document.getElementById('third-day');

  static displayWeather(data) {
    this.today.innerHTML = "";
    this.secondDay.innerHTML = "";
    this.thirdDay.innerHTML = "";

    const todayTemps = document.createElement("div");
    const secondDayTemps = document.createElement("div");
    const thirdDayTemps = document.createElement("div");
    todayTemps.textContent = `Min: ${data.forecast[0].minTemp}, Max: ${data.forecast[0].maxTemp}`
    secondDayTemps.textContent = `Min: ${data.forecast[1].minTemp}, Max: ${data.forecast[1].maxTemp}`
    thirdDayTemps.textContent = `Min: ${data.forecast[2].minTemp}, Max: ${data.forecast[2].maxTemp}`

    this.today.appendChild(todayTemps);
    this.secondDay.appendChild(secondDayTemps);
    this.thirdDay.appendChild(thirdDayTemps);
  }
}