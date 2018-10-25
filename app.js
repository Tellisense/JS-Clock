function myClock() {
  const time = new Date();
  let hours24 = (time.getHours()).toString();
  let hours = (time.getHours() % 12).toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();
  let mSec = time.getMilliseconds().toString();
  let mSeconds = mSec[0];
  const bod = document.querySelector("html");
  const amPm = document.querySelector("#amPm");
  const h = document.querySelector("#hours");
  const m = document.querySelector("#minutes");
  const s = document.querySelector("#seconds");
  const ms = document.querySelector("#mSeconds");
  const hexLeft = document.querySelector("#hexLeft");
  const hexRight = document.querySelector("#hexRight");

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  mSeconds = mSeconds < 9 ? "0" + mSeconds : "1" + mSeconds;
  hours24 = hours24 > 12 ? amPm.innerHTML = "PM" : amPm.innerHTML = "AM";

  const hexString1 = "#" + hours + minutes + seconds;
  const hexString2 = "#" + minutes + seconds + hours;

  // bod.style.backgroundImage = 'linear-gradient(to right, ' + hexString1 + ', ' + hexString2 + ')';
  bod.style.backgroundImage = `linear-gradient(to right, ${hexString1} , ${hexString2})`;
  h.innerHTML = hours + " :";
  m.innerHTML = minutes + " :";
  s.innerHTML = seconds + " :";
  ms.innerHTML = mSeconds;
  hexLeft.innerHTML = hexString1;
  hexRight.innerHTML = hexString2;
}

myClock();
setInterval(myClock, 0);