import axios from "axios";
const API_KEY = process.env.REACT_APP_OWM_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const AQI_URL ="https://api.openweathermap.org/data/2.5/air_pollution";

//-----Weather------//
export const getWeatherByCity = async(city)=>{   
    const response = await axios.get(
        `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
};
//-----AirQuality------//
export const fetchAQI = async(lat,lon)=>{
    const response = await axios.get(
        `${AQI_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    return response.data.list[0];
};

