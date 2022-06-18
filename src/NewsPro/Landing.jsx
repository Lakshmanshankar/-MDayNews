import React, { Component } from 'react'
import Header from './header'
import MainOn from "./MainOn"
import Serivces from './Serivces'
import AboutUs from './AboutUs'
import ProductContainer from './ProductContainer'
import './landing.css'
export default class Landing extends Component {
  render() {
    return (
      <div>
        {/* <Header/>
        <div id="home">
        <MainOn/>
        </div>
        <div className="ContainerServicesPlate">
        <Serivces/>
        </div> */}
        <ProductContainer/>
        {/* <AboutUs/> */}
      </div>
    )
  }
}
