import React from 'react';
import { ForecastData } from 'interfaces';
import 'ui/atoms/DailyHourItem/DailyHourItem.css';

interface DailyHourItem {
  day: ForecastData;
  index: number;
}

interface Props {
  dayData: DailyHourItem;
}

const mathC = (temp: number) => {
  return Math.round(temp);
};

export const DailyHourItem: React.FC<Props> = (props) => {
  return (
    <div className="weather_day_hour">
      <h1>Time:</h1>
      <h2>{props.dayData.day.dt_txt.substr(11, 17)}</h2>
      <div className="weather_day__temp">
        {`${mathC(props.dayData.day.main.temp)}`} °C
      </div>
    </div>
  );
};
