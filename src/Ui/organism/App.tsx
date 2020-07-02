import React, { useState, useEffect} from 'react';
import {ForecastData} from '../../interfaces';
import {show5DayWeather} from '../../Weather_Api/WeatherKeys';
import {DailyObject} from '../molecules/DailyObject';

const App: React.FC = () =>  {
  const [forecastData, setForecastData] = useState<any>([]);
  const [dailyData, setDailyData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const saveData = await show5DayWeather();
      setForecastData(saveData.list)
      console.log(saveData,"dasda")
    };
    getData();
  },[setForecastData]);









  return (
    <div>
        <DailyObject dataEnter={forecastData} />
    </div>
  );
}

export default App;
