import React from 'react'

const getDay = (time) => {
    let date = new Date(time * 1000).toLocaleDateString([], {weekday: 'short'});    
    return date 
}

const DailyWeather = ({data}) => {
   
    if(data){
        return (
            <>
                <div className="row text-center daily-weather-label d-md-none text-muted">
                    <div className="col">
                        <p>Daily Weather</p>
                    </div>
                </div> 
                <div className="row text-center daily-weather">                                      
                    {data.daily.map((element, i) => {
                        if(i <= 5 ){
                            return (
                                <div key={i} id={i} className="col-md-2 col-6 single-day">
                                    <p className="single-day-day">{getDay(element.dt)}</p>
                                    <img className="single-day-icon" alt="Daily weather icon" src={`http://openweathermap.org/img/wn/${element.weather[0].icon}.png`} />                        
                                    <p className="single-day-temp">{Math.round(element.temp.day)}<span className="degrees">o</span></p>                                    
                                </div>                         
                            )
                        }
                        return null;                                            
                    })}                
                </div>         
            </>
        )
    }
    return null;
    
}

export default DailyWeather;
