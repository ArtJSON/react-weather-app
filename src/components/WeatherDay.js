import React, { Component } from "react";
import "../other/weather-icons.css";
import "./WeatherDay.css";
import conditionToIcon from "../utils/conditionToIcon";
import TemperatureBar from "./TemperatureBar";

class WeatherDay extends Component {
  getDayFromDate() {
    const date = new Date(this.props.weatherData.datetime);

    let dayIndex = date.getDay();

    return (
      [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][dayIndex] || ""
    );
  }

  render() {
    return (
      <div className="weather-day">
        <span className="weather-day-data day">{this.getDayFromDate()}</span>
        <i
          className={` wi ${conditionToIcon(this.props.weatherData.icon)}`}
        ></i>
        <div className="temps">
          <span className="weather-day-data tempmin">
            {Math.floor(this.props.weatherData.tempmin)}
            {this.props.units}
          </span>
          <TemperatureBar
            maxAll={Math.floor(this.props.maxAll) + 1}
            minAll={Math.floor(this.props.minAll)}
            max={Math.floor(this.props.weatherData.tempmax) + 1}
            min={Math.floor(this.props.weatherData.tempmin)}
          />
          <span className="weather-day-data tempmax">
            {Math.floor(this.props.weatherData.tempmax) + 1}
            {this.props.units}
          </span>
        </div>
      </div>
    );
  }
}

export default WeatherDay;
