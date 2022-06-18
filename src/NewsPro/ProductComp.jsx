import React, { Component } from 'react'
import './productComp.css'
export default class ProductComp extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
          <div className="ContainerComponent">
            <div className="HeaderComponet">
                {this.props.data[0]}
            </div>
            <div className="ImageComponentOne" style={{background:`url(${this.props.data[1]})`,backgroundPosition:'center',backgroundSize:'cover'}}>
            </div>
            <div className="published">
               {this.props.data[2]}
            </div>
            <div className="Source">
               <a href={`${this.props.data[6]}`}>{this.props.data[4]}</a> 
            </div>
            <div className="Abstract">
               {this.props.data[3]}
            </div>
            <div className="DescrptionService">
             {this.props.data[5]}
            </div>  
          </div>
      </div>
    )
  }
}
