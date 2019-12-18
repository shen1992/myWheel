import React from 'react'
import {render} from 'react-dom'

import './style.module.css'

class Hello extends React.Component {
  render() {
    return (
      <div className='oDiv'>hello world</div>
    )
  }
}

render(
  <Hello/>,
  document.getElementById('root')
)
