import React, { Component } from "react";
import "../other/weather-icons.css";
import conditionToIcon from "../utils/conditionToIcon";
import "./WeatherMoreDetails.css";

class WeatherMoreDetails extends Component {
  render() {
    return (
      <div className="more-details">
        <p className="detail-box">
          Pressure:{" "}
          <span className={"detail-value"}>
            {this.props.weatherData.pressure} hPa
          </span>
        </p>
        <p className="detail-box">
          Perceived temperature:{" "}
          <span className={"detail-value"}>
            {this.props.weatherData.feelslike}
            {this.props.units}
          </span>
        </p>
        <p className="detail-box">
          UV index:{" "}
          <span
            className={"detail-value uv uv-" + this.props.weatherData.uvindex}
          >
            {this.props.weatherData.uvindex}
          </span>
        </p>
      </div>
    );
  }
}

export default WeatherMoreDetails;
