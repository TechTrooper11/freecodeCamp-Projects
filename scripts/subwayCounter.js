
let saveEl = document.getElementById('save-el');
let countEl = document.getElementById("count-el");
let count = 0;

function getData() {
  localStorage.getItem('entries');
}

getData();

function increment() {
  count++;
  countEl.innerText = count;
}

function save () {
  let countStr = " " + count + " - ";

  saveEl.textContent += countStr;
  count = 0;
  countEl.innerText = count;

  function savePreviousData() {
    localStorage.setItem('entries', JSON.stringify(countStr));
  }
  savePreviousData();
}