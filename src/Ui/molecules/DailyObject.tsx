import React, {useState, useEffect} from 'react';
import {DailyItem} from '../atoms/DailyItem';
import {ForecastData} from '../../interfaces';
import '../molecules/DailyObject.css';

interface Props {
    dataEnter:any
}

export const DailyObject = (props: Props) => {
    const [forecastData, setForecastData] = useState<any>([]);

    useEffect(() => {
        setForecastData(props.dataEnter);
    },[props]);

    return (
        <div className="weather_container">
            {forecastData && forecastData.map((day:ForecastData, key: number) =>
                <DailyItem dayData={{day, index: key}} key={day.dt} />
            )}
        </div>
    )
}