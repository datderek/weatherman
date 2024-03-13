import WeatherAPIFacade from './WeatherAPIFacade';
import './style.css';

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const location = formData.get('location');
  WeatherAPIFacade.getWeather(location);
})
