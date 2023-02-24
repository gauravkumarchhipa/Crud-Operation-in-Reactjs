import React from 'react'
import "../Style/displayweather.css"

const DisplayWeather = (props) => {
    // console.log("props", props);
    const {data} = props;

    const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";

  return (
    <div className='displayweather' style={{color : "black"}}>
        {
            data.cod !== 404  ?(
            <React.Fragment>
                <div className='maincard'>
                <span className='cardtitile' style={{color : "black"}}>
                    {data.name}, {data.sys.country}. Weather

                </span>
                <br/>
                <span className='cardsubtitle'>
                    As of {new Date().toLocaleDateString()}
                </span>

                <h5>
                    {Math.floor (data.main.temp - 273.15)}
                    <sup>0</sup>
                </h5>
                <span className='weather-main' style={{color : "black"}}>{data.weather[0].main}</span>
                <img className="weather-icon" src={iconurl} alt="" />
                <span className='weather-description' style={{color : "black"}}>
                    {data.weather[0].description}
                    
                </span>
            </div>
            <div className='weatherdetails'>
                <div className='selectional'>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <h4>High/Low</h4>
                            </td>
                            <td>
                                <p>
                                    {Math.floor(data.main.temp_max - 273.15)} / {" "}
                                    {Math.floor(data.main.temp_min - 273.15)} <sup>0</sup> C
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Humidity</h4>
                            </td>
                            <td>
                                <p>{data.main.humidity}%</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Pressure</h4>
                            </td>
                            <td>
                                <p>{data.main.humidity}hPa</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Visibility</h4>
                            </td>
                            <td>
                                <p>{data.visibility / 1000}km</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className='selection2'>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <h4>Wind</h4>
                                </td>
                                <td>
                                    <p>
                                        {Math.floor((data.wind.speed * 18)/5)}km/hr
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Wind Direction</h4>
                                </td>
                                <td>
                                    <p>

                                        <sup>{data.wind.deg}0</sup> deg
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Sunrise</h4>
                                </td>
                                <td>
                                    <p>
                                        {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Sunset</h4>
                                </td>
                                <td>
                                    <p>
                                    {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            </React.Fragment>
            )
            :(
                 <div className='maincard'>
                <h2>{data.message}</h2>
                </div>
        )}
            
              
        
    </div>
  )
}

export default DisplayWeather