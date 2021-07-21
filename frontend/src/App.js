import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import axios from 'axios';
import Home from './p1.js'
import Sell from './p2.js'
import Checkout from './p3.js';
class App extends Component{
  // state = {
  //   courselist:[]
  // }

  // componentDidMount() {
  //   axios.get("http://localhost:3001/")
  //   .then((response)=>{
  //     console.log(response.data)
  //     this.setState({
  //       courselist: response.data
  //     })
  //   })
  //   .catch((error)=>
  //     console.log(error)
    
  //   )
  //   console.log("fetching data")
  // }

    render(){
      return(
        <>
        <BrowserRouter>
   <Route path="/" component={() => <Home />} exact />
   <Route path="/p2" component={() => <Sell />} exact />
   <Route path="/p3/:username/:price" component={Checkout} />
   </BrowserRouter>
  </>
      )
      }
}


export default App