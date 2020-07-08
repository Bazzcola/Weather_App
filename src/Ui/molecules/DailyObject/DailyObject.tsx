import React, { useState, useEffect } from 'react';
import { DailyItem } from 'ui/atoms/DailyItem/DailyItem';
import { ForecastData } from 'interfaces';
import { show5DayWeather } from 'weather-api/WeatherKeys';
import 'ui/molecules/DailyObject/DailyObject.css';

interface Props {
  dataEnter: ForecastData[];
}

export const DailyObject: React.FC<Props> = (props) => {
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const saveData = await show5DayWeather();
      setForecastData(saveData.list);
      isLoading(false);
    };
    getData();
  }, [setForecastData]);

  useEffect(() => {
    setForecastData(props.dataEnter);
  }, [props.dataEnter]);

  return (
    <div className="weather_container">
      {loading && <div>Loading</div>}
      {forecastData &&
        forecastData.map((day: ForecastData, key: number) => (
          <DailyItem dayData={{ day, index: key }} key={day.dt} />
        ))}
    </div>
  );
};
