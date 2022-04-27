export default function conditionToIcon(condition) {
  switch (condition) {
    case "snow":
      return "wi-snow";
      break;
    case "rain":
      return "wi-rain";
      break;
    case "fog":
      return "wi-fog";
      break;
    case "wind":
      return "wi-strong-wind";
      break;
    case "cloudy":
      return "wi-cloudy";
      break;
    case "partly-cloudy-day":
      return "wi-day-cloudy";
      break;
    case "partly-cloudy-night":
      return "wi-night-alt-cloudy";
      break;
    case "clear-day":
      return "wi-day-sunny";
      break;
    case "clear-night":
      return "wi-night-clear";
      break;
    default:
      return "wi-refresh";
  }
}
