import axios from 'axios';
import { ForecastData } from 'interfaces';

const { CancelToken } = axios;

const apiKey = '886705b4c1182eb1c69f28eb8c520e20';

export const show5DayWeather = {
  cancel: () => {},
  request: () =>
    axios
      .get<{ list: ForecastData[] }>(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=Chisinau&cnt=5&units=metric&appid=${apiKey}`,
        {
          cancelToken: new CancelToken((c) => (show5DayWeather.cancel = c))
        }
      )
      .then((res) => res.data)
};

export const show3HourWeather = {
  cancel: () => {},
  request: async () =>
    axios
      .get<{ list: ForecastData[] }>(
        `https://api.openweathermap.org/data/2.5/forecast?q=Chisinau&cnt=8&units=metric&appid=${apiKey}`,
        {
          cancelToken: new CancelToken((c) => (show3HourWeather.cancel = c))
        }
      )
      .then((res) => res.data)
};
