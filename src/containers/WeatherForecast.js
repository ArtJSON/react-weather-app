import React, { Component } from "react";
import WeatherForm from "../components/WeatherForm";
import axios from "axios";

class WeatherForecast extends Component {
  constructor(props) {
    super(props);
    this.state = { location: "" };

    this.getLocation = this.getLocation.bind(this);
  }

  async componentDidMount() {
    let res = await axios.get("https://ipapi.co/json/");

    let loc = `${res.data.country_name}, ${res.data.city}`;

    this.setState({ location: loc });
  }

  getLocation(loc) {
    this.setState({ location: loc });
  }

  render() {
    return (
      <div className="weather-forecast">
        <WeatherForm handleLocation={this.getLocation} />
        <h1>Forecast for {this.state.location}</h1>
      </div>
    );
  }
}

export default WeatherForecast;
