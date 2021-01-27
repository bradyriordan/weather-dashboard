import React from 'react';
import { IconContext } from "react-icons";
import { 
    WiDaySunny, 
    WiDayCloudy, 
    WiCloud, 
    WiCloudy, 
    WiShowers, 
    WiDayRain, 
    WiThunderstorm, 
    WiSnowflakeCold, 
    WiNightClear, 
    WiNightCloudy,
    WiNightRain,
    WiFog,
    WiAlien
} from "react-icons/wi";

const Icon = ({ icon, size }) => {
    switch (icon){
        case '01d':
        return(
            <IconContext.Provider value={{ size: size }}><div><WiDaySunny /></div></IconContext.Provider>
        )
        break;
        case '02d':
        return(
            <IconContext.Provider value={{ size: size }}><div><WiDayCloudy /></div></IconContext.Provider>
        )
        break;
        case '03d':
        return(
            <IconContext.Provider value={{ size: size }}><div><WiCloud /></div></IconContext.Provider>
        )
        break;
        case '04d':
        return(
            <IconContext.Provider value={{ size: size }}><div><WiCloudy /></div></IconContext.Provider>
        )
        break;
        case '09d':
        return(
            <IconContext.Provider value={{ size: size }}><div><WiShowers /></div></IconContext.Provider>
        )
        break;
        case '10d':
        return(
            <IconContext.Provider value={{ size: size }}><div><WiDayRain /></div></IconContext.Provider>
        )
        break;
        case '11d':
        return(
            <IconContext.Provider value={{ size: size }}><div><WiThunderstorm /></div></IconContext.Provider>
        )
        break;
        case '13d':
        return(
            <IconContext.Provider value={{ size: size }}><div><WiSnowflakeCold /></div></IconContext.Provider>
        )
        break;
        case '50d':
            return(
                <IconContext.Provider value={{ size: size }}><div><WiFog /></div></IconContext.Provider>
            )
            break;
        case '01n':
        return(
            <IconContext.Provider value={{ size: size }}><div><WiNightClear /></div></IconContext.Provider>
        )
        break;
        case '02n':
        return(
            <IconContext.Provider value={{ size: size }}><div><WiNightCloudy /></div></IconContext.Provider>
        )
        break;
        case '03n':
        return(
            <IconContext.Provider value={{ size: size }}><div><WiCloud /></div></IconContext.Provider>
        )
        break;
        case '04n':
        return(
            <IconContext.Provider value={{ size: size }}><div><WiCloudy /></div></IconContext.Provider>
        )
        break;
        case '09n':
        return(
            <IconContext.Provider value={{ size: size }}><div><WiShowers /></div></IconContext.Provider>
        )
        break;
        case '10n':
        return(
            <IconContext.Provider value={{ size: size }}><div><WiNightRain /></div></IconContext.Provider>
        )
        break;
        case '11n':
        return(
            <IconContext.Provider value={{ size: size }}><div><WiThunderstorm /></div></IconContext.Provider>
        )
        break;
        case '13n':
        return(
            <IconContext.Provider value={{ size: size }}><div><WiSnowflakeCold /></div></IconContext.Provider>
        )
        break;
        case '50n':
        return(
            <IconContext.Provider value={{ size: size }}><div><WiFog /></div></IconContext.Provider>
        )
        break;              
        default: 
        return(
            <IconContext.Provider value={{ size: size }}><div><WiAlien /></div></IconContext.Provider>
        )  
    }
}

export default Icon;