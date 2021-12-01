document
  .querySelector("button")
  .addEventListener("click", (ev) => cointPoint(ev));

function cointPoint(ev) {
  ev.preventDefault();
  console.log(document.querySelector("input").value.length);
}
