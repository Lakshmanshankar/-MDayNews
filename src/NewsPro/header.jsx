import React, { Component } from 'react'
import "./header.css"
export default class Header extends Component {
    constructor(){
        super();
        this.state={
            isHome:false
        }
    }
    componentDidMount(){

    }
    HandleEvents(){
        if (this.state.isHome == false){
            var dno=document.getElementById("BaseNav").style.height="40vh"
            var n=document.getElementById("NavBAR").style.display="flex";
            this.setState({isHome:true})
            return 0
        }
        if (this.state.isHome == true){
            var dno=document.getElementById("BaseNav").style.height="10vh"
            var n=document.getElementById("NavBAR").style.display="none";
            this.setState({isHome:false})
            return 0
        }
    }
  render() {
    return (
      <div className='TotalHead'>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
          <div className="header">
              <div className="logo">MDayNews</div>
              <div className="nav-bar" id='BaseNav'>
              <div className="HomeBtn">
                    <button className="HomeButton" onClick={this.HandleEvents.bind(this)}>
                        <span className="material-symbols-outlined" id='MenuBtn'>menu</span>             
                    </button>  
                      </div>
                  <ul className='Navbar' id='NavBAR'>
                      <li className='Options'><a href='#home' className="OptionI"> Home</a></li>
                      <li className='Options'><a href='#Services' className="OptionI"> Services</a></li>
                      <li className='Options'><a href='#Product' className="OptionI"> Products</a></li>
                      <li className='Options'><a href='#AboutUs' className="OptionI"> About us</a></li>
                      <li className='Options'><a href='https://www.nytimes.com/' className="OptionI"> NY_Times</a></li>
                  </ul>
              </div>
          </div>
      </div>
    )
  }
}
