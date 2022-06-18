import React, { Component } from 'react'
import BusinessComponent from './BusinessComponent'
import Landing from './Landing'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
export default class ProductContainer extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
         <Routes>
             <Route path="/" element={<BusinessComponent/>}/>
             <Route path="/" element={<BusinessComponent/>}/>
             <Route path="home" element={<Landing/>}/>
         </Routes>
         </BrowserRouter>
      </div>
    )
  }
}
