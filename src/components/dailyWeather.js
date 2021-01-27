import React, { useState, useEffect } from 'react'
import DailyWeatherMoreData from '../components/dailyWeatherMoreData'

const getDay = (time) => {
    let date = new Date(time * 1000).toLocaleDateString([], {weekday: 'short'});    
    return date 
}



const DailyWeather = ({data}) => {
    const [selectedDay, setSelectedDay] = useState(null);

    useEffect(() => {
        setSelectedDay(null) 
     }, [data])
    
    if(data){
        return (
            <>
                <div className="row text-center daily-weather-label d-md-none text-muted">
                    <div className="col">
                        <p>Daily Weather</p>
                    </div>
                </div> 
                <div className="row text-center daily-weather">                                      
                    {data.map((element, i) => {
                        if(i <= 5 ){
                            return (
                                <div key={i} onClick={() => { setSelectedDay(data[i]) }} id={i} className="col-md-2 col-6 single-day">
                                    <p className="single-day-day">{getDay(element.dt)}</p>
                                    <img className="single-day-icon" alt="Daily weather icon" src={`http://openweathermap.org/img/wn/${element.weather[0].icon}.png`} />                        
                                    <p className="single-day-temp">{Math.round(element.temp.day)}<span className="degrees">o</span></p>                                    
                                </div>                         
                            )
                        }
                        return null;                                            
                    })}                
                </div>
                <DailyWeatherMoreData data={selectedDay} />         
            </>
        )
    }
    return null;
    
}

export default DailyWeather;
