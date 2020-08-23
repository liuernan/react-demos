// react
{
  const age = 18;

  // class 组件
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        number: 0
      };
    }

    add() {
      this.setState({
        number: this.state.number + 1
      });
    }

    minus() {
      this.setState({
        number: this.state.number - 1
      });
    }

    render() {
      return (
        <div className="app">
          <p>React</p>
          <p>传给我的 name 是：{this.props.name}</p>
          <p>传给我的 age 是：{this.props.age}</p>
          <span>{this.state.number}</span>
          <button className="button" id="add" onClick={this.add.bind(this)}>+1</button>
          <button className="button" id="minus" onClick={this.minus.bind(this)}>-1</button>
        </div>
      );
    }
  }

  const render = () => {
    // create virtual DOM and render it to real DOM
    ReactDOM.render(
      <div>
        <App name="刘二男" age={age}/>
        <App name="同一个 class 组件的第二次引用，number 各是各的" age={666}/>
      </div>,
      document.querySelector("#react-app"));
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