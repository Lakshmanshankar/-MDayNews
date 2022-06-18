import React, { Component } from 'react'
import './mainOn.css'
export default class MainOn extends Component {
  render() {
    return (
      <div className='MainComponentOne'>
        <div className="ConatianerFotMain">
          <div className="TitleCard">MDayNews</div>
          <div className="TitleDescription">
            MdayNews is a website where you can get the latest news 
            with the help of newyork times api
            <br></br>
            <p style={{color:"rgb(210, 45, 97)"}}>* It is free</p>
          </div>
          <div className="ShortNavigations">
            <a href="#Services" className='ReadMore'>ReadMore</a>
            <a href='#ContactUs' className='Useless'>Contact us</a>
          </div>
        </div>
        <div className="ContentLogo">
        </div>
      </div>
    )
  }
}
