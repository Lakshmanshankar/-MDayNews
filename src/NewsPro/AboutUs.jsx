import React, { Component } from 'react'
import { ContactUs } from './ContactUs'
import "./aboutUs.css"
export default class AboutUs extends Component {
  constructor(){
    super()
    var dat=new Date();
    var year=dat.getUTCFullYear();
    this.state={
      year:year
    }
    
  }
  render() {
    return (
      <div id='AboutUs'>
          <div className="ContainerForAbout">
            <div className="NameContainer">
              Lakshmanshankar C
            </div>
            <div className="AboutMe">
              I am React.js developer loves writing React code.
              build awesome Interactive webpages and 
              I am looking for a job as developer
              You can find more about me on my github 
            </div>
          </div>
          <div className="ContactForm">
            <ContactUs/>
          </div>
          <div className="ContentForAboutUs">About Us</div>
          <div className="downLoadable">
          <h1 className='LinkFollowThree'>Follow Us</h1>
            <a href="https://github.com/Lakshmanshankar" className='LinkFollowOne'> Github</a>
            <a href="https://codepen.io/lakshmanshankar" className='LinkFollowOne'> CodePen</a>
            <a href="https://twitter.com/Lakshman_12_10" className='LinkFollowTwo'> Twitter</a>
          </div>
          <div className="ThankYouText">
          Thank you for Visiting MDayNews {this.state.year} 
          </div>
      </div>
    )
  }
}
