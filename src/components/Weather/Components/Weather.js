import React from 'react'
import "../Style/weather.css";
import DisplayWeather from './DisplayWeather';
import { useState } from 'react';
const Weather = () => {

  

    const [weather, setWeather] = useState([]);
    const [form, setForm] = useState({city : "", country: "",});
    // console.log(form);

    // const APIKEY = "41b690a33b3603850d2b286b4dda7440";
    const APIKEY = "e0b69f8b2229e4d516d67f9b3d817079";
    const weatherData = async(e) =>{
      e.preventDefault();
      if(form.city === ""){
        alert("Enter City Name");
      }
      else if(form.country === ""){
        alert("Enter Country Name");
      }
      else {
        // console.log(weather);
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
        )
        .then((res)=> res.json())
        // .then((res)=> console.log(res.json()))
        .then((data)=> data);
        // .then((data)=> console.log(data));


        setWeather({data : data});
      }

    }

    const handleChange = (e) =>{
      let name = e.target.name;
      let value = e.target.value;

      if(name === "city") {
        setForm({...form, city : value});
      }
      if(name === "country") {
        setForm({...form, country : value});
      }

    }

  return (
    <div className='weather'>
        <span className = "title">Weather App</span>
        <br/>
        <form>
            <input type='text' placeholder='city' name="city" onChange={(e)=>handleChange(e)}/>&nbsp; &nbsp; &nbsp;&nbsp;
            <input type='text' placeholder='Country' name="country" onChange={(e)=>handleChange(e)}/><br/><br/>
            <button className='getweather' onClick={(e)=> weatherData(e)}>Submit</button>
            
        </form>
        {weather.data !== undefined ? (
          <div>
            <DisplayWeather data={weather.data}/>
          </div>
        ) :
      null}
    </div>
  )
}

export default Weather