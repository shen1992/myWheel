import React from 'react'
import {render} from 'react-dom'

import style from './style.module.css'
console.log('style', style)

class App extends React.Component {
  render() {
    return (
      <div className={style.oDiv}>hello world</div>
    )
  }
}

render(
  <App></App>,
  document.getElementById('root')
)



