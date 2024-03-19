import Display from './Display';
import WeatherAPIFacade from './WeatherAPIFacade';
import './style.css';

const locationForm = document.querySelector('form');

locationForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(locationForm);
  const location = formData.get('location');
  const weatherPromise = WeatherAPIFacade.getWeather(location);
  weatherPromise.then((data) => Display.updateDisplay(data));
})
