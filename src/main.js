// plain JavaScript
const $output = document.querySelector(".output");
const $addButton = document.querySelector("#add");
const $minusButton = document.querySelector("#minus");

$addButton.addEventListener("click", () => {
  const value = parseInt($output.innerText, 10);
  $output.innerText = (value + 1).toString();
});

$minusButton.addEventListener("click", () => {
  const value = parseInt($output.innerText, 10);
  $output.innerText = (value - 1).toString();
});