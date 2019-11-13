import React from "react";
import ReactDOM from "react-dom";

import style from './style.module.css';

import icon from './img.jpg'

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1 className={style.oDiv}>Hello111 from {this.props.compiler} and {this.props.framework}!<img src={icon}/></h1>;
    }
}

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById('root')
)