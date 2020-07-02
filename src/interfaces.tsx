interface Temp {
    max: number;
    min: number;
}

interface Weather {
    main: string;
}

export interface dayData {
    day:ForecastData;
    index:number;
}

interface Main {
    humidity:number;
    temp_min:number;
    temp_max:number;
}
export interface ForecastData {
    dt: number;
    humidity: number;
    temp: Temp;
    weather: Weather[];
    main:Main;
}
export interface Props {
    data:ForecastData[];
}