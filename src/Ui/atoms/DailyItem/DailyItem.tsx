import React from 'react';
import dayjs from 'dayjs';
import { ForecastData } from 'interfaces';
import 'ui/atoms/DailyItem/DailyItem.css';

interface DailyItem {
  day: ForecastData;
  index: number;
}
interface Props {
  dayData: DailyItem;
}
const mathC = (temp: number) => {
  return Math.round(temp);
};

export const DailyItem: React.FC<Props> = (props) => {
  const { dt } = props.dayData.day;

  const getDay = () => {
    const newDate = dayjs.unix(dt).date();
    const date = dayjs.unix(dt).day();
    let dayOfWeek = '';
    if (date === 0) dayOfWeek = 'Sun';
    if (date === 1) dayOfWeek = 'Mon';
    if (date === 2) dayOfWeek = 'Tue';
    if (date === 3) dayOfWeek = 'Wed';
    if (date === 4) dayOfWeek = 'Thu';
    if (date === 5) dayOfWeek = 'Fri';
    if (date === 6) dayOfWeek = 'Sat';
    return `${dayOfWeek} ${newDate} `;
  };

  return (
    <div className="weather_day__item">
      <h1>{getDay()}</h1>
      <img
        src={`http://openweathermap.org/img/wn/${props.dayData.day.weather[0].icon}@2x.png`}
        alt=""
      />
      <div className="weather_day__text">
        Max: {`${mathC(props.dayData.day.temp.max)}`} °С
      </div>
      <div className="weather_day__text">
        Min: {`${mathC(props.dayData.day.temp.min)}`} °С
      </div>
    </div>
  );
};
