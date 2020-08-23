// react
{
  let number = 0;
  const age = 18;

  const App = (props) => {
    return (
      <div className="app" id="virtual-dom">
        <p>React</p>
        <p>传给我的 name 是：{props.name}</p>
        <p>传给我的 age 是：{props.age}</p>
        <span>{number}</span>
        <button className="button" id="add" onClick={add}>+1</button>
        <button className="button" id="minus" onClick={minus}>-1</button>
      </div>
    );
  };

  const render = () => {
    // create virtual DOM and render it to real DOM
    ReactDOM.render(
      <App name="刘二男" age={age}/>,
      document.querySelector("#react-app"));
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
  const $addButton = document.querySelector("#add-js");
  const $minusButton = document.querySelector("#minus-js");

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