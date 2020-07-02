import React from 'react';
import {ForecastData} from '../../interfaces';

interface DailyItem {
    day:ForecastData;
    index:number;
}

interface Props {
    dayData:DailyItem;
}

export const DailyItem = (props: Props) => {
    return (
        <div>
            <h1>Day Title</h1>
            <span>{props.dayData.day.main.temp_min}</span>
            <span>{props.dayData.day.main.temp_max}</span>
        </div>
    )
}