const adviceID = document.getElementById("adviceTag");
const adviceSlip = document.getElementById("adviceText");
const button = document.getElementById("button");

URL_APIKEY = "https://api.adviceslip.com/advice";

const clickHandler = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    console.log(data);
}

// const clickHandler = async () => {
//   try {
//     fetch("https://wordsapiv1.p.mashape.com/words/simple")
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   } catch (error) {
//     console.log("we got a big problem dickface");
//   }
// };

// let clickHandler = () => {
//   fetch(URL_APIKEY)
//     .then((data) => data.json())
//     .then((item) => {
//       console.log(item);
//     });
// };

button.addEventListener("click", clickHandler);
