// счетчик

const qqq = document
  .querySelector("#coint")
  .addEventListener("click", (ev) => cointPoint(ev));

function cointPoint(ev) {
  ev.preventDefault();
  console.log(document.querySelector("input").value.length);
}

// калькулятор

let action;

document.querySelector("#plus").addEventListener("click", () => {
  action = "+";
});

document.querySelector("#minus").addEventListener("click", () => {
  action = "-";
});

document.querySelector("#times").addEventListener("click", () => {
  action = "*";
});

document.querySelector("#divide").addEventListener("click", () => {
  action = "/";
});

document.querySelector(".calcBtn").addEventListener("click", () => {
  calculate();
});

function calculate() {
  let result;
  const num1 = Number(document.querySelector("#num1").value);
  const num2 = Number(document.querySelector("#num2").value);

  switch (action) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
  document.querySelector("#num1").value = "";
  document.querySelector("#num2").value = "";
  document.querySelector("#result").innerHTML = result;
}
