import React from 'react';
import clouds from './clouds.mp4';
import './Background.css';
import fullLogo from '../images/YOUR-LOGO-HERE.png';
type Props = {

}
console.log(fullLogo)

const Background = (props: Props) => {
  return (
    <>
    <div className='video-div'>
        <video src={clouds} autoPlay loop muted />
    </div>
    <div className='video-onTop'>
        <h1>WELCOME TO</h1>
        <img src={fullLogo} />
        <p>Site</p>
    </div>
    </>
  )
}

export default Background;