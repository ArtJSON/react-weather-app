import React, { Component } from "react";
import "../other/weather-icons.css";
import conditionToIcon from "../utils/conditionToIcon";
import "./WeatherDetails.css";

class WeatherDetails extends Component {
  render() {
    const sunrise = new Date("2000-01-01 " + this.props.weatherData.sunrise);
    const sunset = new Date("2000-01-01 " + this.props.weatherData.sunset);

    let now = new Date();
    now.setFullYear(2000);
    now.setMonth(0);
    now.setDate(1);

    let classes = "weather-details ";

    if (now.getTime() > sunset.getTime() || now.getTime() < sunrise.getTime()) {
      classes += "night";
    } else {
      classes += "day";
    }

    return (
      <div className={classes}>
        <h1 className="location">{this.props.location}</h1>
        <i
          className={`big-icon wi ${conditionToIcon(
            this.props.weatherData.icon
          )}`}
        ></i>
        <p className="temperature">
          {this.props.weatherData.temp}
          {this.props.units}
        </p>
        <p className="temprange">
          From {Math.floor(this.props.weatherInfo.tempmin)}
          {this.props.units} to {Math.floor(this.props.weatherInfo.tempmax) + 1}
          {this.props.units}
        </p>
        <p>{this.props.weatherInfo.description}</p>
        <div className="sunrise-sunset">
          <span>
            <i className="wi wi-sunrise"></i> {this.props.weatherData.sunrise}
          </span>
          <span>
            <i className="wi wi-sunset"></i> {this.props.weatherData.sunset}
          </span>
        </div>
      </div>
    );
  }
}

export default WeatherDetails;
