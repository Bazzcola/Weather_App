import React, { useState, useEffect } from 'react';
import {
  show5DayWeather,
  show3HourWeather
} from '../../Weather_Api/WeatherKeys';
import { DailyObject } from '../molecules/DailyObject';
import { DailyHour } from '../molecules/DailyHour';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../organism/App.css';

export const App: React.FC = () => {
  const [forecastData, setForecastData] = useState<any>([]);
  const [dailyData, setDailyData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const saveData = await show5DayWeather();
      setForecastData(saveData.list);
    };
    getData();
  }, [setForecastData]);

  useEffect(() => {
    const getData = async () => {
      const saveData = await show3HourWeather();
      setDailyData(saveData.list);
    };
    getData();
  }, [setDailyData]);

  return (
    <Router>
      <Switch>
        <React.Fragment>
          <div className="container">
            <h1 className="weather_title">Daily Weather Application</h1>
            <Route path="/" comp={DailyObject} exact>
              <Link className="link" to="/hour">
                Go hour weather
              </Link>
              <DailyObject dataEnter={forecastData} />
            </Route>
            <Route path="/hour" comp={DailyHour}>
              <Link className="link" to="/">
                Go daily weather
              </Link>
              <DailyHour dataEnter={dailyData} />
            </Route>
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
};
