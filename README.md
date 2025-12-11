# Weather App + AQI + AI Assistant

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0EA5E9?style=for-the-badge&logo=tailwindcss&logoColor=white)
![OpenWeather](https://img.shields.io/badge/OpenWeather_API-FE7000?style=for-the-badge&logo=icloud&logoColor=white)
![Groq](https://img.shields.io/badge/Groq_AI-FF4A4A?style=for-the-badge&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-OpenSource-blue?style=for-the-badge)

A modern weather application built using React and Node.js.  
It displays real-time weather, AQI (air quality index), and includes an AI-powered weather summary using Groq's LLaMA model via backend.

---

## Overview

This app provides:
- Real-time weather information
- Air Quality Index (AQI)
- AI-generated short summaries
- Weather-based video backgrounds
- Responsive UI built with TailwindCSS

Weather & AQI data come from OpenWeatherMap.  
AI summaries are generated via a secure Express backend.

---

## Features

Weather:
- Search by city  
- Temperature, humidity, and wind speed  
- Dynamic background videos  

Air Quality:
- Real-time AQI  
- WHO-style scale  

AI Assistant:
- Short weather summaries  
- Secure backend API call  
- Groq LLaMA model  

UI/UX:
- TailwindCSS  
- Glassmorphism card  
- Fully responsive  

---

## Tech Stack

Frontend:
- React  
- JavaScript  
- TailwindCSS  
- Axios  

Backend:
- Node.js  
- Express  
- Groq SDK  
- dotenv  

APIs:
- OpenWeatherMap  
- Groq AI  

---

## Project Structure

weather-app  
├── backend  
│   ├── server.js  
│   ├── aiRoute.js  
│   ├── package.json  
│   └── .env (ignored)  
│  
├── src  
│   ├── components  
│   ├── services  
│   ├── App.js  
│   └── index.js  
│  
├── public  
│   ├── videos  
│   └── index.html  
│  
├── .env (ignored)  
├── .gitignore  
├── package.json  
└── README.md  

---

## Setup Instructions

### 1. Clone the repo

git clone https://github.com/aravinddmohan/weather-app.git  
cd weather-app  

### 2. Install frontend dependencies

npm install  

### 3. Create frontend .env

REACT_APP_OWM_KEY=your_openweather_api_key  

---

## Backend Setup (AI Assistant)

cd backend  
npm install  

Create backend .env:

GROQ_KEY=your_groq_api_key  

Run backend:

node server.js  

Backend URL:  
http://localhost:5000  

---

## Run Frontend

npm start  

Frontend URL:  
http://localhost:3000  

---

## AQI Reference Scale

1 - Good  
2 - Fair  
3 - Moderate  
4 - Poor  
5 - Very Poor  

---

## Future Enhancements

- 5-day forecast  
- Auto-location  
- Voice AI  
- Improved AQI visuals  
- Cloud deployment  

---

## Author

Aravind D Mohan  
GitHub: https://github.com/aravinddmohan  
