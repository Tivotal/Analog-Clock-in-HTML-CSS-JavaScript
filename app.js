/* Created by Tivotal */

let hourHand = document.querySelector(".hour");
let minHand = document.querySelector(".minute");
let secHand = document.querySelector(".second");

let updateTime = () => {
  //creating new date object
  let date = new Date();

  //getting current time and converting it into degrees
  let secDeg = (date.getSeconds() / 60) * 360;
  let minDeg = (date.getMinutes() / 60) * 360;
  let hourDeg = (date.getHours() / 12) * 360;

  //rotating hands based on time degrees we got
  secHand.style.transform = `rotate(${secDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
};

//function to update time for every second
setInterval(updateTime, 1000);

//function to update time
updateTime();
