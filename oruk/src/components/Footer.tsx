import React, { Component } from 'react'
import './Footer.css';

type Props = {}

type State = {}

class Footer extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className='footer'>
        <div className='footer-left'>
        <p>Footer</p>
        <p>info@YOURLOGO.FI</p>
        </div>
        <div className='footer-right'>
            <p>Dummy content</p>
            <p>wow you can contact us here</p>
        </div>
        </div>
    )
  }
}

export default Footer