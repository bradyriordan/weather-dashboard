import React, { useState, useEffect } from 'react';
import MoreData from '../components/moreData'
import DailyWeather from '../components/dailyWeather'
import Icon from '../components/icon'
import { IconContext } from "react-icons";
import { AiOutlineCalendar } from "react-icons/ai";
import { GiPositionMarker } from "react-icons/gi";

const getDate = () => {    
    const date = new Date(Date.now()).toLocaleString("en-US", {weekday: 'long', month: 'long', day: 'numeric'}).replace(/,?\s/, " ");
    return date
}

const CurrentWeather = ({ latLng, city }) => {    
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latLng.lat}&lon=${latLng.lng}&exclude=minutely,alerts&appid=7fecb693992564d5f339fd0684f5de2c&units=metric`)
            .then(res => res.json())
            .then(setData)
            .then(console.error)
    }, [latLng])
    if (data) {
        return (
            <>
                <div className="current-weather">
                    <div className="row main-icon">
                        <div className="col text-center icon">
                            <Icon icon={data.current.weather[0].icon} size="10em" />
                            <p className="text-muted description">{data.current.weather[0].description}</p>                            
                        </div>
                    </div>
                    <div className="row text-center align-items-center main-temp">
                        <div className="col-md-4">
                            <IconContext.Provider value={{ size: "3em", className: "calendar" }}>
                                <div>
                                    <AiOutlineCalendar />
                                </div>
                            </IconContext.Provider>
                            <p>{getDate()}</p>
                        </div>
                        <div className="col-md-4">
                            <h2 className="display-1"><strong>{Math.round(data.current.temp)}</strong><span className="degrees main-degrees">o</span></h2>
                            <p><span className="text-muted">feels like<br/></span>{Math.round(data.current.feels_like)}<span className="degrees">o</span></p>
                        </div>
                        <div className="col-md-4">
                            <IconContext.Provider value={{ size: "3em", className: "marker" }}>
                                <div>
                                    <GiPositionMarker />
                                </div>
                            </IconContext.Provider>
                            <p>{city}</p>
                        </div>
                    </div>

                    <MoreData data={data} />                   

                    <DailyWeather data={data.daily} />  

                </div>
            </>
        )
    }
    return null;

}

export default CurrentWeather;