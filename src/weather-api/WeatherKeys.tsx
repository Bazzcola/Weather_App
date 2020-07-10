import axios from 'axios';

const apiKey = '886705b4c1182eb1c69f28eb8c520e20';
// { [key: string]: () => Promise<{ name: string }[]> }
const sourceShow5DayWeather = axios.CancelToken.source();
export const show5DayWeather: any = {
  cancel: () => sourceShow5DayWeather.cancel(),
  request: () =>
    axios
      .get<{ name: string }[]>(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=Chisinau&cnt=5&units=metric&appid=${apiKey}`,
        { cancelToken: sourceShow5DayWeather.token }
      )
      .then((res) => res.data)
};

const sourceShow3HourWeather = axios.CancelToken.source();
export const show3HourWeather: any = {
  cancel: () => sourceShow3HourWeather.cancel(),
  request: async () =>
    axios
      .get<{ name: string }[]>(
        `https://api.openweathermap.org/data/2.5/forecast?q=Chisinau&cnt=8&units=metric&appid=${apiKey}`,
        { cancelToken: sourceShow3HourWeather.token }
      )
      .then((res) => res.data)
};
