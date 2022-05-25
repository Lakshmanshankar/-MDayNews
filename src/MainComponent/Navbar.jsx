import React, { Component } from 'react'
import './navbar.css'
import Services from './Services'
import Prduct from './Prduct'
export default class Navbar extends Component {
  render() {
    return (
      <div className='MainX'>
          <div className="navBar">
              <div className="Logo">MDayNews</div>
              <ul className='links'>
                  <li className='option'><a href='#home'>Home</a></li>
                  <li className='option'><a href='#Servics'>Services</a></li>
                  <li className='option'><a href='#product'>Product</a></li>
                  <li className='option'><a href=''>About us</a></li>
              </ul>
          </div>
          <div className="MainContent" id='Home'>
            <div className="CompanyAnim">MDayNews</div>
            <div className="Conatiner">
              We offer real time News given by News
Api were you can customise the News according to your preferences
    </div>
            <div className="TwoStandard"><button className='ReadMore'>Read More</button>
            <button className='Signin'>Contact us</button>
            </div>
            <div className="ImageComponent"></div>
          </div>
          <div className="Service" id='Servics'>
<Services data={["MDayNews","MdayNews is a free news webpage where you can get the latest news"]}/>
<Services data={["Real time","News here is real time and refreshes every hour,ensure that you get the latest feed"]}/>
<Services data={["It's Free","Everything You find in MDayNews is 100% FREE"]}/>
<Services data={[" languages","MdayNews is Have Multiple languages Like French japenese"]}/>
</div>



<div className="Product" id='product'>
<Prduct/>
</div>
      </div>
    )
  }
}
