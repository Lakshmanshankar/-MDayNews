import React, { Component } from 'react'
import "./services.css"
export default class Serivces extends Component {
  constructor(){
    super()
  }
  componentDidMount(){
    for (let index = 0; index < 4; index++) {
      var obj=document.getElementById(`ServicesCrd${index}`)
      this.HandleIntersection(obj);
    }
    
  }
  HandleIntersection(obj){
      var observe=new IntersectionObserver((entries)=>{
        entries.forEach((x)=>{
          if (x.isIntersecting == true){
            obj.classList.remove("ContainersErvice")
            
            obj.classList.add("ContainersErviceAnim")
          }
         
        })
      },{
        threshold:0
      })
    observe.observe(obj)
  }
  render() {
    return (
      <div id='Services'>
        <div className="ContainersErvice" id='ServicesCrd0'>
          <div className="ImageContainer" id='ImageContainerOne'>
          </div>
          <div className="HeadingForServices" id='ServiceCardOne'>
            Realtime
          </div>
          <div className="DescriptionForServices">
            Everything you see on our webpage is Realtime
            .We continously work  togther to bring the latest news to you
            <br></br>
            <br></br>
            With the help of ours You get the right And the latest News
          </div>
        </div>
        <div className="ContainersErvice" id='ServicesCrd1'>
          <div className="HeadingForServices" id='ServiceCardTwo'>
            It's Free
          </div>
          <div className="DescriptionForServices">
            We are delighted to serve you at free of cost.
            As it is our responsiblity to Provide the best Information
            <br></br>
            We are 100% Free and must not charge for anything
          </div>
          <div className="ImageContainer" id='ImageContainerTwo'>
          </div>
        </div>
        <div className="ContainersErvice" id='ServicesCrd2'>
        <div className="ImageContainer" id='ImageContainerThree'>
          </div>
          <div className="HeadingForServices" id='ServiceCardThree'>
            Diverse
          </div>
          <div className="DescriptionForServices">
            We can provide you a wide vareity of news starting from business
            to politics.
            And From Technology to Sports
            <br></br>
          </div>
        </div>
        <div className="ContainersErvice" id='ServicesCrd3'>
          <div className="HeadingForServices" id='ServiceCardFour'>
            GlobalNews
          </div>
          <div className="DescriptionForServices">
            You can Get the Global News in this webpage
            News from different countries
            <br></br>  <br></br>

            Get Everything as quickly as possible
          </div>
          <div className="ImageContainer" id='ImageContainerFour'>
          </div>
        </div>
      </div>
    )
  }
}