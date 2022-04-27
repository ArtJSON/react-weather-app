import React, { Component } from "react";
import WeatherForm from "../components/WeatherForm";
import axios from "axios";

class WeatherForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      weather: [],
    };

    this.setLocation = this.setLocation.bind(this);
    this.setWeather = this.setWeather.bind(this);
  }

  async componentDidMount() {
    let locRes = await axios.get("https://ipapi.co/json/");

    let loc = `${locRes.data.country_name}, ${locRes.data.city}`;

    this.setState({ location: loc });

    this.setWeather();
  }

  setLocation(loc) {
    this.setState({ location: loc });
  }

  async setWeather() {
    const loc = this.state.location;

    let weathRes =
      await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=metric&include=days%2Ccurrent&key=${process.env.REACT_APP_WEATHER_API_KEY}&contentType=json
    `);

    this.setState({ weather: weathRes.data.days });
  }

  render() {
    return (
      <div className="weather-forecast">
        <WeatherForm handleLocation={this.setLocation} />
        <h1>Forecast for {this.state.location}</h1>
        <div className="weather-day">{this.state.weather.days}</div>
      </div>
    );
  }
}

export default WeatherForecast;
