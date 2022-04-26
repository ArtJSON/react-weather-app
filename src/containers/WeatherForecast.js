import React, { Component } from "react";
import WeatherForm from "../components/WeatherForm";

class WeatherForecast extends Component {
  constructor(props) {
    super(props);
    this.state = { location: "" };

    this.getLocation = this.getLocation.bind(this);
  }

  getLocation(loc) {
    this.setState({ location: loc });
  }

  render() {
    return (
      <div className="weather-forecast">
        <WeatherForm handleLocation={this.getLocation} />
      </div>
    );
  }
}

export default WeatherForecast;
