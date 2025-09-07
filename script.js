const toggleBtn = document.querySelector("#toggleTheme");
const form = document.querySelector("form");
const container = document.querySelector(".container")
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  form.classList.toggle("dark");
  container.classList.toggle("dark");


  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
})



function convert() {
  let temp;
  let inputValue = Number(textBox.value);

  if (toFahrenheit.checked) {
    temp = inputValue * 9 / 5 + 32;
    result.textContent = temp.toFixed(1) + " °F";
    addHistory(inputValue + " °C → " + temp.toFixed(1) + " °F");
  }
  else if (toCelsius.checked) {
    temp = (inputValue - 32) * 5 / 9;
    result.textContent = temp.toFixed(1) + " °C";
    addHistory(inputValue + " °F → " + temp.toFixed(1) + " °C");
  }
  else {
    result.textContent = "Select a unit";
  }
}

function addHistory(entry) {
  let historyBox = document.getElementById("history");
  let li = document.createElement("li");
  li.textContent = entry;
 historyBox.prepend(li);
}
function clearHistory() {
  let clearBtn = document.getElementById("history");
  clearBtn.innerHTML = "";
}