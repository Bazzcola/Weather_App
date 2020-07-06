import axios from 'axios';

const apiKey = '886705b4c1182eb1c69f28eb8c520e20';

export const show5DayWeather: any = async () => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast/daily?q=Chisinau&cnt=5&units=metric&appid=${apiKey}`
  );
  return response.data;
};

export const show3HourWeather: any = async () => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=Chisinau&cnt=8&units=metric&appid=${apiKey}`
  );
  return response.data;
};

export default { show5DayWeather, show3HourWeather };
