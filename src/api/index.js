import axios from 'axios';

const getData = async () => {
  const response = await axios.get(
    'https://api.open-meteo.com/v1/forecast?latitude=48.3&longitude=18.07&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin'
  );

  return response.data;
};

const createForecastData = (data) => {
  const forecast = [];
  for (let index = 0; index < 6; index++) {
    forecast.push({
      date: data.time[index],
      max: data.temperature_2m_max[index],
      min: data.temperature_2m_min[index]
    });
  }

  return forecast;
};

const actualTemp = async () => {
  const data = await getData();

  return data.current.temperature_2m;
};

const forecastTemps = async () => {
  const data = await getData();
  const response = createForecastData(data.daily);

  return response;
};

export { actualTemp, forecastTemps };
