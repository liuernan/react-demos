// react
{
  const h = React.createElement;

  let number = 0;

  const render = () => {
    // create virtual DOM
    const virtualDOM = h(
      "div", {className: "app", id: "virtual-dom"},
      h("p", {}, "React:"),
      h("span", {}, number),
      h("button", {className: "button", id: "add-react", onClick: add}, "+1"),
      h("button", {className: "button", id: "minus-react", onClick: minus}, "-1"));

    // render
    ReactDOM.render(virtualDOM, document.querySelector("#react-app"));
  };

  // methods
  const add = () => {
    number += 1;
    render();
  };
  const minus = () => {
    number -= 1;
    render();
  };

  render();
}


// plain JavaScript
{
  // get DOM elements
  const $output = document.querySelector(".output");
  const $addButton = document.querySelector("#add");
  const $minusButton = document.querySelector("#minus");

  // bind Events
  $addButton.addEventListener("click", () => {
    // handling details
    const value = parseInt($output.innerText, 10);
    $output.innerText = (value + 1).toString();
  });

  $minusButton.addEventListener("click", () => {
    // handling details
    const value = parseInt($output.innerText, 10);
    $output.innerText = (value - 1).toString();
  });
}