const express = require("express");
const router = express.Router();
const redisClient = require("../services/redisClient");
const { getWeatherData } = require("../services/weather");

router.get("/:city", async (req, res , next) => {
  const city = req.params.city;

  try {
    // Check if data exists in Redis
    let cachedData = await redisClient.get(city);

    if (cachedData) {
      console.log("Data from Cache");
      return res.status(200).json(JSON.parse(cachedData));
    }

    // Fetch from Weather API if not in cache
    const weatherData = await getWeatherData(city);

    // Store in Redis with expiration time (12 hours)
    await redisClient.set(city, JSON.stringify(weatherData), {
      EX: 43200,
    });

    console.log("Data from API");
    return res.status(200).json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data please enter valid data" });
    next(error);
  }
});

module.exports = router;
