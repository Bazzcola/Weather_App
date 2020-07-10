import React, { useState, useEffect } from 'react';
import { DailyItem } from 'ui/atoms/DailyItem/DailyItem';
import { show5DayWeather } from 'weather-api/WeatherKeys';
import { ForecastData } from 'interfaces';
import 'ui/molecules/DailyObject/DailyObject.css';

interface Props {
  dataEnter: ForecastData[];
}

export const DailyObject: React.FC<Props> = (props) => {
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const saveData = await show5DayWeather.request();
        setForecastData(saveData.list);
        isLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => {
      show5DayWeather.cancel();
    };
  }, []);

  return (
    <div className="weather_container">
      {loading && <div className="loading">Loading...</div>}

      {forecastData &&
        forecastData.map((day: ForecastData, key: number) => (
          <DailyItem dayData={{ day, index: key }} key={day.dt} />
        ))}
    </div>
  );
};
