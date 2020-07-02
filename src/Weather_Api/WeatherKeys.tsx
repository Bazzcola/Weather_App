import axios from 'axios'

const apiKey = '887b844485d94b598b6b81262448e283'

export const show5DayWeather: any = async () => {
    const response = await axios
        .get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&
        exclude=daily&appid=${apiKey}`);
    return response.data;

};

export default {show5DayWeather};