# Weather API with Redis Caching

## **Application Overview**
This project is a simple Weather API that fetches weather data from **Visual Crossing Weather API**. To improve performance and reduce the load on the external API, it uses **Redis** for caching. When a user requests weather data for a specific city, the API first checks if the data is available in Redis. If not, it fetches the data from the weather API and stores it in Redis for future requests.

This ensures that the weather data is quickly available and reduces redundant calls to the external weather API.

## **Tech Stack**
- **Node.js** and **Express.js** for building the API.
- **Redis** for caching the weather data.
- **Visual Crossing Weather API** for fetching the weather data.
- **Axios** for making HTTP requests to the external API.

## **Features**
- **Caching**: Weather data is cached in Redis for 12 hours to reduce unnecessary calls to the external API.
- **Error Handling**: The API has error handling in place to handle any issues that may arise when fetching data from Redis or the external API.
- **Weather Data Retrieval**: If data is cached in Redis, it's returned directly. If not, it’s fetched from the weather API and cached for subsequent requests.
# Weather API with Redis Caching

![Weather API Logo](images/weather-api-f8i1q(1).png)

This project is a simple Weather API...


## **How to Use**

### **1. Setup Environment**
Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/)
- [Redis](https://redis.io/download) (or use a Redis cloud service like Redis Labs)

### **2. Install Dependencies**
Clone the repository and install the dependencies by running the following command:
ب
```bash
npm install
