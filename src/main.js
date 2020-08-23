// react
{

  let number = 0;

  const render = () => {
    // create virtual DOM
    const p = React.createElement("p", {}, "React:");
    const span = React.createElement("span", {}, number);
    const addButton = React.createElement("button", {className: "button", id: "add-react", onClick: add}, "+1");
    const minusButton = React.createElement("button", {className: "button", id: "minus-react", onClick: minus}, "-1");
    const virtualDOM = React.createElement("div", {
      className: "app",
      id: "virtual-dom"
    }, p, span, addButton, minusButton);

    // render
    const $app = document.querySelector("#react-app");
    ReactDOM.render(virtualDOM, $app);
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

  render()
}


// plain JavaScript
{
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
}