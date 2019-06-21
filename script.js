let text = document.getElementById("text");
let butt = document.getElementById("butt");
let list = document.getElementById("list");

let notes = {};
let edit = false;
let key;

butt.addEventListener("click", function() {
  if (edit) {
    notes[key] = text.value;
    edit = false;
    key = undefined;
    text.value = " ";
  } else {
    let date = new Date();
    let now =
      addZero(date.getHours()) +
      ":" +
      addZero(date.getMinutes()) +
      ":" +
      addZero(date.getSeconds()) +
      "  " +
      addZero(date.getDate()) +
      "." +
      addZero(date.getMonth() + 1) +
      "." +
      date.getFullYear();
    notes[now] = text.value;
    text.value = " ";

    let li = document.createElement("li");
    li.innerHTML = now;
    list.appendChild(li);

    li.addEventListener("click", function() {
      text.value = notes[this.innerHTML];
      edit = true;
      key = this.innerHTML;
    });
  }
});

function addZero(num) {
  if (num >= 0 && num <= 9) {
    return "0" + num;
  } else {
    return num;
  }
}

function removeElement()
{
   document.querySelector('li').remove();
}