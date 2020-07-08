import React, { useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { DailyObject } from 'ui/molecules/DailyObject/DailyObject';
import { DailyHour } from 'ui/molecules/DailyHour/DailyHour';
import { ForecastData } from 'interfaces';
import 'ui/organisms/App/App.css';

export const App: React.FC = () => {
  const [forecastData] = useState<ForecastData[]>([]);
  const [dailyData] = useState<ForecastData[]>([]);
  
  return (
    <Router>
      <Switch>
        <>
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
        </>
      </Switch>
    </Router>
  );
};
