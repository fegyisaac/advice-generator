const adviceID = document.getElementById("adviceTag");
const adviceSlip = document.getElementById("adviceText");
const button = document.getElementById("button");

URL_APIKEY = "https://api.adviceslip.com/advice";

const clickHandler = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  adviceSlip.innerHTML = data.slip.advice;
  adviceID.innerHTML = data.slip.id;
};

button.addEventListener("click", clickHandler);

window.addEventListener("load", clickHandler);
