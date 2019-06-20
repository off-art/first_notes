let notes = {};

let text = document.getElementById("text");
let butt = document.getElementById("butt");

butt.addEventListener("click", function() {
  let date = new Date();
  let now =
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds() +
    ":" +
    date.getDay() +
    "." +
    date.getMonth() +
    "." +
    date.getFullYear();
  notes[now] = text.value;
});
