export function greetingFn() {
  let date = new Date();
  let hours = date.getHours();
  let greeting = "";
  if (hours >= 0 && hours < 6) {
    greeting = "Early morning";
  } else if (hours >= 6 && hours < 11) {
    greeting = "Morning";
  } else if (hours >= 11 && hours < 16) {
    greeting = "Afternoon";
  } else if (hours >= 16 && hours < 20) {
    greeting = "Evening";
  } else {
    greeting = "Night";
  }

  return `Good ${greeting}`;
}
greetingFn();

export const isEven = (value) => {
  return value % 2 === 0 ? true : false;
};
