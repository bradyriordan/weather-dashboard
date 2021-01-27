import React from 'react';

const convertTime = (time) => {
    let date = new Date(time * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    date = date[0] == 0 ? date.substring(1) : date
    return date;
}

const HourlyWeather = ({ data }) => {

    if (data) {
        return (
            <>
                <div className="row text-center text-muted hourly-weather-label">
                    <div className="col">
                        <p>Hourly</p>
                    </div>
                </div>
                <div className="row padding-top-30 hourly-weather text-center">                
                    {data.map((element, i) => {
                        if(i <= 11 ){
                            return (
                                <div className="col-2 col-md-1 text-center single-hourly-weather" key={i}>                            
                                    <p><span className="bold hourly-small">{convertTime(element.dt)}</span></p>    
                                    <img alt="Hourly weather icon" src={`http://openweathermap.org/img/wn/${element.weather[0].icon}.png`} />                        
                                    <p className="hourly-temp">{Math.round(element.temp)}<span className="degrees">o</span></p>                                     
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

export default HourlyWeather;