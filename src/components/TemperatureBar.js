import React, { Component } from "react";
import "./TemperatureBar.css";

// props: min temp, max temp, minall temp, maxall temp,

class TemperatureBar extends Component {
  static defaultProps = {
    min: 0,
    max: 20,
    minAll: -50,
    maxAll: 50,
  };

  generateHSLTemp(temp) {
    let hue = 50 + (240 * (35 - temp)) / 65;
    return `hsla(${hue}, 70%, 50%, 1) ${
      ((temp - this.props.minAll) * 100) /
      (this.props.maxAll - this.props.minAll)
    }%, `;
  }

  generateBackgroudColor(temp) {
    return ` #0c1526 ${
      ((temp - this.props.minAll) * 100) /
      (this.props.maxAll - this.props.minAll)
    }%, `;
  }

  generateGradient() {
    let gradient = "linear-gradient(90deg,";
    for (let t = this.props.minAll; t < this.props.maxAll; t += 1) {
      if (t < this.props.min) {
        gradient += this.generateBackgroudColor(t);
      } else if (t === this.props.min) {
        gradient += this.generateBackgroudColor(t);
        gradient += this.generateHSLTemp(t);
      } else if (t > this.props.min && t < this.props.max) {
        gradient += this.generateHSLTemp(t);
      } else if (t === this.props.max) {
        gradient += this.generateHSLTemp(t);
        gradient += this.generateBackgroudColor(t);
      } else {
        gradient += this.generateBackgroudColor(t);
      }
    }

    gradient = gradient.slice(0, -2);

    gradient += ")";

    return gradient;
  }

  render() {
    return (
      <div
        style={{ background: this.generateGradient() }}
        className="temp-bar"
      ></div>
    );
  }
}

export default TemperatureBar;
