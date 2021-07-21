import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import axios from 'axios';
import './styles/index.css'
import {Link,NavLink } from 'react-router-dom';
import image12 from './images/ishop.png'

class Checkout extends Component{ 
  constructor(props){ 
    super(props)
    console.log(props)
  this.state={
    product:[],
    menu:[],
    count:1,
    product1:1,
    flag:true,
    price:1,
    price1:1,
    sum:0,
    shoppingfee:150
  }
}

myFunctionR = () => {
  console.log(this.flag)
  this.setState((state) => (
      {product:[],
      count:0,
      price:0,
    flag:false,
    sum:0
  }
      ))
      if(this.count===0){
      console.log("No Item in Todo")
      }
  window.alert("Your Cart is Empty ")
  console.log(this.state.flag)
}

myFunctionS = () => {
  
  if(this.state.flag==false){
    let localcount=this.state.count;
    console.log("Manali")
  this.setState((state) => (
    
    {count:0,
  price:0,
  sum:0

    }))
  }

  else{
    let localcount=this.state.count;
    if(this.state.price===0){
      this.state.price=this.state.price1
      this.setState((state)=>({
        sum:0
      }))
    }
    console.log("Manali")
    console.log(this.state.price)
  this.setState((state) => (
    
    {count:localcount+1,
      price:this.state.price1*(localcount+1),
      sum:0
      
    }))
  }
  console.log(this.state.sum)

      console.log(this.state.count)
  console.log("yes")

}


myFunctionT = () => {
  let localcount=this.state.count;
  if(this.state.flag==false||localcount<=0){
    
    console.log("Manali")
  this.setState((state) => (
    
    {count:0,
      price:0,
      sum:0

    }))
  }

  else{
    let anothercount=this.state.count;
    console.log("Manali")
    console.log(this.state.price)
  this.setState((state) => (
    
    {count:localcount-1,
      price:this.state.price1*(anothercount-1),
      sum:0
      
    }))
    console.log("work")
  }

      console.log(this.state.count)
  console.log("yes")

}

myFunctionZ = () => {
  let localcount=this.state.count;
    
    console.log("Manali")
    let x=this.state.price
    const z=parseInt(x)
    console.log(typeof(this.state.count))
    if(this.state.flag==false){
      let localcount=this.state.count;
      console.log("Manali")
    this.setState((state) => (
      
      {sum:0
  
      }))
    }
    else if(this.state.count===0){
      this.setState({
        sum:0
      })
    }
    else{
  this.setState((state) => (
    
    {

sum:parseInt(x)+150
    })
    )
  }
}
componentDidMount() {
  let one ="http://localhost:3001/home";
    let two="http://localhost:3001/products";
    let three="http://localhost:3001/readme";

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);

axios.all([requestOne, requestTwo,requestThree])
.then(
axios.spread((...responses) => {
    const responseOne = responses[0].data;
    const responseTwo = responses[1].data;
    const responseThree = responses[2].data;

    const newList = responseTwo.filter((item) => item._id === this.props.match.params.username) 
    console.log(responseOne, responseTwo)
    const priceList=this.props.match.params.price

    this.setState({
       menu:responseOne,
       product:newList,
       price:priceList,
       price1:priceList
      })
  })
)
     .catch((error)=>
       console.log(error+"Wrong")    
     
     )
     console.log("price")
     console.log("fetching data")
 
   }

  render(){
    return(

      <>
     <div className="one"><img src={image12}/></div>
<div className="top">
           {this.state.menu.map((i)=>(
               <div key={i.id}>
                 <Link  id="link"  to="/p2">{i.item}</Link>
               </div> 
))}
 </div>


 <div className="toptwo">
<NavLink activeClassName="active" to="#" id="linkone">Cart </NavLink>
</div>

<div className="top2">
  <div>PRODUCT</div>
  <div>PRICE</div>
  <div>QTY</div>
  <div>UNIT PRICE</div>
</div>
<hr className="ho"></hr>




 <div>
 {this.state.product.map((i)=>(
       
       <div id="#eightyt">
       <button onClick={this.myFunctionR} id="cross">	&#10060;</button>
       {/* <button id="eleven" className="btn active">Hot</button> */}
       <div key={i.id}>
      
        


      <img src={i.path} id="niney" />
      <div className="twogrid">
      <p id="pone">{i.item}</p>
         <h1 id="ptwo">{this.state.price}</h1>
         <div className="increase">
           <button onClick={this.myFunctionT} id="po">-</button>
           <p id="set">{this.state.count}</p>
           <button onClick={this.myFunctionS} id="po">+</button>
          </div>
          <p id="ptwo">{this.props.match.params.price}</p> 
          </div>
</div>
      </div>
      ))}

</div> 

<div className="coupan">
  <input placeholder="Voucher Code" id="code" />
  <button type="button" className="btn btn-primary" placeholder="Voucher Code" id="reedem">Reedem</button>
</div>

<div>
  <div className="final">
    <div id="finalone">Subtotal</div>
  <div id="finaltwo">{this.state.price}</div>

  <div id="finalone">Shopping Fee</div>
  <div id="finaltwo">150</div>

  <div id="finalone">Coupan</div>
  <div id="finaltwo">No</div>

  <div id="total">Total</div>
  <div id="totals">{this.state.sum}</div>

  <div className="coupan">
  <button type="button" className="btn btn-primary"  id="reedemone" onClick={this.myFunctionZ}>Check out</button>
</div> 
</div>
</div>


</>
    )
}
}
export default Checkout;