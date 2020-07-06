import React, { useState,useEffect } from 'react';
import { ForecastData } from '../../interfaces';
import { DailyHourItem } from '../atoms/DailyHourItem';
import '../molecules/DailyHour.css';

interface Props {
    dataEnter:any
}

export const DailyHour = (props: Props) => {
    const [dailyData, setDailyData] = useState<any>([]);

    useEffect(() => {
        setDailyData(props.dataEnter);
    },[props]);

    return (
        <div className="weather_container__hour">
            {dailyData && dailyData.map((day:ForecastData, key: number) =>
                <DailyHourItem dayData={{day, index: key}} key={day.dt}/>
            )}
        </div>
    )
}