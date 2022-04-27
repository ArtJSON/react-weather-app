import React, { Component } from "react";
import "./TemperatureBar.css";

// props: min temp, max temp, minall temp, maxall temp,

class TemperatureBar extends Component {
  static defaultProps = {
    min: 0,
    max: 10,
    minAll: -1,
    maxAll: 11,
  };

  render() {
    let gradient = "linear-gradient(90deg,";
    for (let t = this.props.minAll; t < this.props.maxAll; t += 1) {
      if (t < this.props.min) {
        gradient += ` #0c1526 ${
          ((t - this.props.minAll) * 100) /
          (this.props.maxAll - this.props.minAll)
        }%, `;
      } else if (t === this.props.min) {
        gradient += ` #0c1526 ${
          ((t - this.props.minAll) * 100) /
          (this.props.maxAll - this.props.minAll)
        }%, `;
        let hue = 50 + (240 * (35 - t)) / 65;
        gradient += `hsla(${hue}, 70%, 50%, 1) ${
          ((t - this.props.minAll) * 100) /
          (this.props.maxAll - this.props.minAll)
        }%, `;
      } else if (t > this.props.min && t < this.props.max) {
        let hue = 50 + (240 * (35 - t)) / 65;
        gradient += `hsla(${hue}, 70%, 50%, 1) ${
          ((t - this.props.minAll) * 100) /
          (this.props.maxAll - this.props.minAll)
        }%, `;
      } else if (t === this.props.max) {
        let hue = 50 + (240 * (35 - t)) / 65;
        gradient += `hsla(${hue}, 70%, 50%, 1) ${
          ((t - this.props.minAll) * 100) /
          (this.props.maxAll - this.props.minAll)
        }%, `;
        gradient += ` #0c1526 ${
          ((t - this.props.minAll) * 100) /
          (this.props.maxAll - this.props.minAll)
        }%, `;
      } else {
        gradient += ` #0c1526 ${
          ((t - this.props.minAll) * 100) /
          (this.props.maxAll - this.props.minAll)
        }%, `;
      }
    }

    gradient = gradient.slice(0, -2);

    gradient += ")";

    return <div style={{ background: gradient }} className="temp-bar"></div>;
  }
}

export default TemperatureBar;
