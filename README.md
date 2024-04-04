# WeatherMan
Another one of those Weather apps... but I made it!

<p align="center">
  <img style="height: 325px" src="https://github.com/datderek/weatherman/assets/88995035/ba1fec6d-1821-4f49-b067-b0416b81e48f" data-canonical-src="https://github.com/datderek/weatherman/assets/88995035/ba1fec6d-1821-4f49-b067-b0416b81e48f"/>
  <img style="height: 325px" src="https://github.com/datderek/weatherman/assets/88995035/c56fa72a-2264-4f0e-812e-fbbd46c016f3" data-canonical-src="https://github.com/datderek/weatherman/assets/88995035/c56fa72a-2264-4f0e-812e-fbbd46c016f3"
</p>
  
## Goal:

The goal of this project was to practice working with public APIs and the asynchronous code (Promises, async/await, etc.) required to work with APIs.

### Features:
- Search for the weather at any location!
- Responsive page layout, works on mobile screens
- Beautiful simplistic design (subjective to me)

## Getting Started:
### Retrieve your Key
This webapp is dependent on the free API provided by [WeatherAPI](https://www.weatherapi.com/)
1. Sign up for an account
2. Grab your API key from the [Account page](https://www.weatherapi.com/my/)
3. Clone the GitHub library
4. Create a `.env` file at the root
5. Copy your API key into the `.env` with the following format:
```
API_KEY=XXXXXXXXXXXXXXXX
```

### Running the App
2. Install the neccessary dependencies via `npm i`
3. Build the project via `npm run build`
4. Host the webapp locally via `npm run dev`
