import React, { Component } from 'react'
import'./Product.css'
export default class Prduct extends Component {
    constructor(){
        super()
        this.state={
            datam:[],
            Content:[]
        }
    }
    componentDidMount(){
    
    }
    CheckUpdate(){
        
        var content=[]
        var n="https://newsapi.org/v2/everything?q=tesla&from=2022-04-22&sortBy=publishedAt&language=en&apiKey=5830d0054f6e4b92b7b6507a14a6505f"
        var fet=fetch(n).then((res)=>res.json()).then((data)=>{
          console.log(data)
           for(var i=0;i<10;i++){
               content.push([data.articles[i].author,data.articles[i].content,data.articles[i].urlToImage,data.articles[i].title,data.articles[i].publishedAt,data.articles[i].description]) 
           }
           this.setState({datam:content})
        }).catch((err)=>{
            console.log(err)
        })
    }
  render() {
    return (
      <div>
        <div className="HeaderMdm"><button className='NewsLoader' onClick={this.CheckUpdate.bind(this)}>Get Latest Feed</button></div>
        {
 this.state.datam.map((x)=>(<div className='NewsFeeds' key={x} style={{background:'white',display:'-ms-flexbox'}}>
  <div className="imagecontainer" style={{background:`url("${x[2]}")`,backgroundPosition:'center',backgroundSize:'cover'}}>
  </div>
  <ul className="AuthorName">
   <li style={{display:'block'}}>Authors:{x[0]}</li>  
   <li style={{display:'block'}}>lastUpdated:{x[4]}</li>
  </ul>
  { <div className="TitleContent">{x[3]}</div> }
<div className="Description">{x[5]}</div>
  <div className="MainNewsFeeds">
    {x[1]}
  </div>
   </div>))
        } 
      </div>
    )
  }
}