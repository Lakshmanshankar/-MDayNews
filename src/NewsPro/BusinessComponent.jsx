import React, { Component } from 'react'
import ProductComp from './ProductComp'
export default class BusinessComponent extends Component {
    constructor(){
        super()
        this.state={
            BaseData:[]
        }
    }
    componentDidMount(){
        this.FetchComponents();
    }
    FetchComponents(){
        var base="https://api.nytimes.com/svc/news/v3/content/nyt/sports.json?api-key=kd0gCWsvH0y9nxzRA2FhDucDjyAWkv79"
        var ftch=fetch(base)
        .then((x)=>x.json())
        .then((data)=>{
            let temp=[]
            for(let i=0;i<=7;i++){
             temp[i]=[
             data.results[i].byline,
             data.results[i].multimedia[2].url,
             data.results[i].published_date,
             data.results[i].title,
             data.results[i].source,
             data.results[i].abstract,
             data.results[i].url
            ]
            }
          this.setState({BaseData:temp})
        })
        .catch((err)=>{
            console.log(err)
        }) 
    }
  render() {
    return (
      <div id='Product'> 
        {this.state.BaseData.map((x,id)=>(<ProductComp key={id}data={x}/>))}
      </div>
    )
  }
}
