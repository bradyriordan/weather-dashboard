import React, { useEffect } from 'react'
import Icon from '../components/icon'

const getDate = datetime => {     
    let date = new Date(datetime * 1000).toLocaleDateString("en-US", {weekday: 'long', month: 'long', day: 'numeric'}).replace(/,?\s/, " ");  
    return date.toLocaleString()
}

const DailyWeatherMoreData = ({data}) => {
    if(data){
        return (
            <>
                <div className="row daily-weather-label text-center">
                    <div className="col">
                        <p>{getDate(data.dt)}</p>                       
                    </div>
                </div>
                <div className="row daily-weather-more-data">
                    <div className="col-12 col-md-2 text-center">
                        <Icon icon={data.weather[0].icon} size="10em" />
                    </div>
                    <div className="col-6 col-md-2 text-center single-daily-weather-more-data">
                        <p>Morn</p>
                        <div className="row">
                            <div className="col-6">
                                <h1>{Math.round(data.temp.morn)}<span className="degrees-big">o</span></h1>
                            </div>
                            <div className="col-6 text-left">
                                <div className="text-muted">Feels like</div>
                                <div>{Math.round(data.feels_like.morn)}<span className="degrees main-degrees">o</span></div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-6 col-md-2 text-center single-daily-weather-more-data">
                        <p>Day</p>
                        <div className="row">
                            <div className="col-6">
                                <h1>{Math.round(data.temp.day)}<span className="degrees-big">o</span></h1>
                            </div>
                            <div className="col-6 text-left">
                                <div className="text-muted">Feels like</div>
                                <div>{Math.round(data.feels_like.day)}<span className="degrees main-degrees">o</span></div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-6 col-md-2 text-center single-daily-weather-more-data">
                        <p>Eve</p>
                        <div className="row">
                            <div className="col-6">
                                <h1>{Math.round(data.temp.eve)}<span className="degrees-big">o</span></h1>
                            </div>
                            <div className="col-6 text-left">
                                <div className="text-muted">Feels like</div>
                                <div>{Math.round(data.feels_like.eve)}<span className="degrees main-degrees">o</span></div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-6 col-md-2 text-center single-daily-weather-more-data">
                        <p>Night</p>
                        <div className="row">
                            <div className="col-6">
                                <h1>{Math.round(data.temp.night)}<span className="degrees-big">o</span></h1>
                            </div>
                            <div className="col-6 text-left">
                                <div className="text-muted">Feels like</div>
                                <div>{Math.round(data.feels_like.night)}<span className="degrees main-degrees">o</span></div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-12 col-md-2 text-center single-daily-weather-more-data">
                        <p>POP {Math.round(data.pop)}%</p>                        
                        <div className="row">
                            <div className="col-6">
                                <div><span className="font-weight-bold">RAIN</span> {data.rain ? Math.round(data.rain) + 'mm' : 'None'}</div>                                
                            </div>
                            <div className="col-6">                                
                                <div><span className="font-weight-bold">SNOW</span> {data.snow ? Math.round(data.snow) + 'mm' : 'None'}</div>
                            </div>
                        </div>
                        
                        
                    </div>                      
                </div>
            </>
        )
    } else {
        return null
    }
    
    
}


export default DailyWeatherMoreData;