import React, { useState } from 'react'
import { IconContext } from "react-icons";
import { WiSunrise, WiSunset, WiStrongWind, WiHumidity } from "react-icons/wi";
import { RiArrowDropUpLine, RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import HourlyWeather from '../components/hourlyWeather'

const convertTime = (time) => {
    let date = new Date(time * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    date = date[0] == 0 ? date.substring(1) : date
    return date    
}

const MoreData = ({data}) => {
    const [moreData, toggleMoreData] = useState('hide-more-data');
    const [moreLess, toggleMoreLess] = useState('MORE');
    return (
        <>
            <div className="row text-center toggle-more-data">
                <div className="col">
                    <a onClick={
                        () => {
                            if (moreData === 'show-more-data') {
                                toggleMoreData('hide-more-data');
                                toggleMoreLess('MORE');
                            } else {
                                toggleMoreData('show-more-data');
                                toggleMoreLess('LESS');
                            }
                        }
                    }
                    >{moreLess}</a>
                    {moreLess === 'MORE' ?
                        <IconContext.Provider value={{ size: "2em" }}>                       
                            <RiArrowDropRightLine />                        
                        </IconContext.Provider> : 
                        <IconContext.Provider value={{ size: "2em" }}>                       
                            <RiArrowDropDownLine />                        
                        </IconContext.Provider> 
                    }
                     
                </div>
            </div>
            <div className={moreData}>          
                <div className="row text-center more-data-meta">
                    <div className="col-md-2 col-6 more-data-col">
                        <IconContext.Provider value={{ size: "4em" }}>
                            <div>
                                <WiSunrise />
                            </div>
                        </IconContext.Provider>
                        <p className="text-muted">Sunrise</p>
                        <p className="">{convertTime(data.current.sunrise)}</p>
                    </div>
                    <div className="col-md-2 col-6 more-data-col">
                        <IconContext.Provider value={{ size: "4em" }}>
                            <div>
                                <WiSunset />
                            </div>
                        </IconContext.Provider>
                        <p className="text-muted">Sunset</p>
                        <p className="">{convertTime(data.current.sunset)}</p>
                    </div>
                    <div className="col-md-2 col-6 more-data-col">
                        <IconContext.Provider value={{ size: "4em" }}>
                            <div>
                                <RiArrowDropDownLine />
                            </div>
                        </IconContext.Provider>
                        <p className="text-muted">Low</p>
                        <p>{Math.round(data.daily[0].temp.min)}<span className="degrees">o</span></p>
                    </div>
                    <div className="col-md-2 col-6 more-data-col">
                        <IconContext.Provider value={{ size: "4em" }}>
                            <div>
                                <RiArrowDropUpLine />
                            </div>
                        </IconContext.Provider>
                        <p className="text-muted">High</p>
                        <p>{Math.round(data.daily[0].temp.max)}<span className="degrees">o</span></p>
                    </div>
                    <div className="col-md-2 col-6 more-data-col">
                        <IconContext.Provider value={{ size: "4em" }}>
                            <div>
                                <WiHumidity />
                            </div>
                        </IconContext.Provider>
                        <p className="text-muted">Humidity</p>
                        <p>{Math.round(data.current.humidity)}%</p>
                    </div>
                    <div className="col-md-2 col-6 more-data-col">
                        <IconContext.Provider value={{ size: "4em" }}>
                            <div>
                                <WiStrongWind />
                            </div>
                        </IconContext.Provider>
                        <p className="text-muted">Wind Speed</p>
                        <p>{Math.round(data.current.wind_speed)} km/h</p>
                    </div>
                </div>
                <HourlyWeather data={data} />
            </div>
        </>
    )
}

export default MoreData;