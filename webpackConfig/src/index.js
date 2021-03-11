import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
  render() {
    return (
      <div>hello react 15</div>
    )
  }
}

ReactDOM.render(
  <Hello/>,
  document.getElementById('root')
)