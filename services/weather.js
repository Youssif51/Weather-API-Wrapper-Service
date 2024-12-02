const axios = require("axios");

const getWeatherData = async (city) => {
  const API_KEY = process.env.WEATHER_API_KEY;

  try {
    const response = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    throw error;
  }
};

module.exports = { getWeatherData };
