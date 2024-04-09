import moment from "moment";

export const timeDifference = (startTime, endTime) => {
  if (startTime && endTime) {
    const differenceInMinutes = moment(endTime, "HH:mm:ss").diff(
      moment(startTime, "HH:mm:ss"),
      "minutes"
    );
    let hours = Math.floor(differenceInMinutes / 60);
    let minutes = differenceInMinutes % 60;
    if (minutes < 0) {
      minutes += 60;
    }
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    if (hours <= 9) {
      return `0${hours}:${formattedMinutes}:00`;
    }
    return `${hours}:${formattedMinutes}:00`;
  }
};
