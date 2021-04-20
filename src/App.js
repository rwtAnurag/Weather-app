import React from 'react';
import './App.css';
import CityInput from './components/CityInput/index'
import CityWeather from './components/CityWeather/index'

function App() {

     
  const [city , setCity] = React.useState("");
  const [cityWeather , setCityWeather] = React.useState({});

  const fetchCityWeather = () =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e61fd8cd0bd55226e07b631ae032c192`)
      .then((response)=> response.json())
      .then((result) => {
        setCityWeather(result);
      })
      .catch((error)=>{
        console.log("error is",error);
      })
  };

 // console.log(cityWeather.main.temp);
  return (
    <div className="container bg-dark text-center text-uppercase font-weight-bold rounded" style={{fontSize:"25px", color:"white"}}>
    <CityInput city={city} setCity={setCity} fetchCityWeather={fetchCityWeather}/>
    <CityWeather cityWeather={cityWeather}/>
    </div>
  );
}

export default App;
