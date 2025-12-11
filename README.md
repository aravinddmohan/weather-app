# Weather App (React + AQI)

A web-based weather application built using React that displays real-time weather information and air quality index (AQI) data with dynamically changing background visuals.

---

## Overview

This project provides current weather conditions for any city using the OpenWeatherMap API. In addition to standard weather details, the application also displays air pollution data such as AQI level and particulate concentration.

The application has been designed with a modern user interface and responsive layout in mind.

---

## Features

- City-based weather search
- Real-time temperature, humidity, and wind speed
- Air Quality Index (AQI) display
- Dynamic weather-based background visuals
- Environment variable support for API configuration
- Component-based architecture
- Responsive UI

---

## Technologies Used

- React (Create React App)
- JavaScript (ES6)
- Tailwind CSS
- Axios
- OpenWeatherMap API
- HTML5 Video assets

---

## Project Structure

src/
components/      UI components  
services/        API services  
App.js  
index.js  

public/  
videos/          background media files  
index.html  

.env              environment variables (ignored in Git)

---

## Setup Instructions

1. Clone the repository

git clone https://github.com/aravinddmohan/weather-app.git  
cd weather-app  

2. Install dependencies

npm install  

3. Configure environment variables  

Create a `.env` file in the root directory and add:

REACT_APP_OWM_KEY=your_api_key_here  

You can obtain an API key from:  
https://openweathermap.org/

4. Run the application

npm start  

The application will be available at:

http://localhost:3000

---

## Air Quality Index (AQI) Scale

1  - Good  
2  - Fair  
3  - Moderate  
4  - Poor  
5  - Very Poor  

---

## Security

All API credentials are managed using environment variables and are excluded from version control via `.gitignore`.

---

## Future Enhancements

- Five-day forecast
- Location auto-detection
- Enhanced AQI UI
- Deployment to cloud hosting platforms

---

## Author

Aravind D Mohan  
GitHub: https://github.com/aravinddmohan

---

## License

Open-source project for educational and personal use.
