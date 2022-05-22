import React, { Component } from 'react'
import './services.css'
export default class Services extends Component {
    constructor(){
        super()
        this.state={
            Heading:[],
            Images:[],
            Content:[]
        }
    }
    componentDidMount(){
      animation()
    }

  render() {
    return (
      <div className='Services'>
          <div className="GridContainer" id='Contaner'>
              <div className="HeadingService">{this.props.data[0]}</div>
              <div className="ContentService">{this.props.data[1]}</div>
          </div>
      </div>
    )
  }
}

function animation(){
    var IDobj=document.getElementById("Contaner")
    var observer=new IntersectionObserver((entries)=>{
        entries.forEach((x)=>{
            if (x.isIntersecting ==true){
                IDobj.classList.toggle("Animatable")
             
                const lo=document.getElementsByClassName("Animatable");
            }
            else{
                 IDobj.classList.toggle("Animatable")
            }
        })
    },{
        threshold:0.4
    })
    observer.observe(IDobj)

}