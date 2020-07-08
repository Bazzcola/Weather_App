import React, { useState, useEffect } from 'react';
import { ForecastData } from 'interfaces';
import { DailyHourItem } from 'ui/atoms/DailyHourItem/DailyHourItem';
import { show3HourWeather } from 'weather-api/WeatherKeys';
import 'ui/molecules/DailyHour/DailyHour.css';

interface Props {
  dataEnter: ForecastData[];
}

export const DailyHour: React.FC<Props> = (props) => {
  const [dailyData, setDailyData] = useState<ForecastData[]>([]);
  const [loading, isLoading] = useState<boolean>(true)

  useEffect(() => {
    const getData = async () => {
      const saveData = await show3HourWeather();
      setDailyData(saveData.list);
      isLoading(false)
    };
    getData();
  }, [setDailyData]);

  useEffect(() => {
    setDailyData(props.dataEnter);
  }, [props.dataEnter]);

  return (
    <div className="weather_container__hour">
      {loading && <div>Loading</div>}
      {dailyData &&
        dailyData.map((day: ForecastData, key: number) => (
          <DailyHourItem dayData={{ day, index: key }} key={day.dt} />
        ))}
    </div>
  );
};
