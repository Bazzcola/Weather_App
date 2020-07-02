import React, {useState, useEffect} from 'react';
import {DailyItem} from '../atoms/DailyItem';
import {ForecastData, dayData} from '../../interfaces';

interface Props {
    dataEnter:any
}

export const DailyObject = (props: Props) => {
    const [forecastData, setForecastData] = useState<any>([]);

    useEffect(() => {
        setForecastData(props.dataEnter);
    },[props]);

    return (
        <div>
            {forecastData && forecastData.map((day:ForecastData, key: number) =>
                <DailyItem dayData={{day, index: key}} key={day.dt} />
            )}
        </div>
    )
}