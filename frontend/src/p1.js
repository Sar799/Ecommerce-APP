import React, { Component } from 'react';
import axios from 'axios';
import {Link,NavLink } from 'react-router-dom';
import {BrowserRouter , Route} from 'react-router-dom'
import './styles/index.css'
import Carousel from 'react-elastic-carousel'
import image1 from './images/i1.jpeg'
import image2 from './images/i2.png'
import image3 from './images/i3.png'
import image4 from './images/i4.png'
import image5 from './images/i5.png'
import image6 from './images/i6.png'
import image7 from './images/i7.jpg'
import image8 from './images/i8.png'
import image9 from './images/i9.png'
import image10 from './images/i10.png'
import image11 from './images/i11.png'
import image12 from './images/ishop.png'
import image20 from './images/star.png'
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends Component{
  state={
      menu:[],
      product:[],
      best:[],
      store:[],
      readme:[]
    }

    
    componentDidMount() {
       let one ="http://localhost:3001/home";
      let two="http://localhost:3001/stores";
      let three="http://localhost:3001/bests";
      let four="http://localhost:3001/fbest";
      let five="http://localhost:3001/readme";

  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);
  const requestThree = axios.get(three);
  const requestTFour = axios.get(four);
  const requestTFive = axios.get(five);
  axios.all([requestOne, requestTwo, requestThree,requestTFour,requestTFive])
  .then(
  axios.spread((...responses) => {
      const responseOne = responses[0].data;
      const responseTwo = responses[1].data;
      const responesThree = responses[2].data;
      const responesFour = responses[3].data;
      const responesFive = responses[4].data;
      console.log(responseOne, responseTwo, responesThree,responesFour,responesFive)

      this.setState({
         menu:responseOne,
         store:responseTwo,
         best:responesThree,
         product:responesFour,
         readme:responesFive
        })
    })
  )
       .catch((error)=>
         console.log(error+"Wrong")    
       
       )
       console.log("fetching data")
   
     }

    
     render(){    
      return (
        <>
         
         
    
<div className="one"><img src={image12}/></div>
<div className="top">
    {this.state.menu.map((i)=>(
        <div key={i.id}>
               <NavLink  id="link"  to="/p2">{i.item}</NavLink>
             </div> 
))}
</div>

<hr id="line"></hr>
<img src={image1} id="image1"/>
<div className="both">
<div className="head3">
<div>Accessories</div>
<div>Category</div>
<div>Category</div>
</div>

<div className="head2">
{this.state.store.map((i)=>(
             <div key={i.id}> 
               <Link to="/p2" className="btns">{i.item}</Link>
             </div> 
             
))}
</div>
</div>
<div>
<h5 id="best">BEST SELLER</h5>
</div> 
<div className="seller">
{this.state.best.map((i)=>(
             <div key={i.id}>
              <Link className="btns" to="/p2p">{i.item}</Link>
             </div>
         ))}
        </div>
        <div className="pb">
         
        {this.state.product.map((i)=>(
          <div id="eight">
            <button id="eleven" className="btn active">Hot</button>
             <div key={i.id}>
             <Link to={
       {
         pathname:'/p3/'+i._id+'/'+i.price,
        

       }
      }>
               <img src={i.path} id="nine" /></Link>
              <p id="ten">{i.item}</p>
<img src={image20} id="left"/>

<div className="six">
              <div id="thirteen">${i.price}</div>
              <del id="fourteen">499</del>
  <del>{i.oldprice}</del>
</div>
              </div>
             </div>
         ))}


</div>
<Link to="/p2" id="more">Load More</Link>
<div>
<img src={image2} id="image2" />
</div> 
<div>
<img src={image3} id="image3" />
</div> 

<div>
<img src={image4} />
</div> 

<Carousel itemsToShow={3}>
{this.state.product.map((i)=>(
<div className="scroll">
             <div key={i.id}>
                <img src={i.path} id="gridimage" />
              <p id="tene">{i.item}</p>

              <div className="sixp">
              <div id="thirteen">${i.price}</div>
  <del id="fourteen">{i.oldprice}</del>
</div>
</div>
</div>
         )
         )}
</Carousel>

<div>
<img src={image5} id="image5" />
</div> 
<Link to="/p2">
<div className="twitter">
<img src={image6}/>
<img src={image7}  id="twit2"/>
</div>
</Link>

<div className="last">
   <div>Information</div>
   <div>Service</div>
   <div>Extras</div>
   <div>My Account</div>
   <div>Useful Links</div>
   <div>Our Offers</div>
</div>

<div className="lastone">
{this.state.readme.map((i)=>(
             <div key={i.id}> 
               <button className="btn">{i.item}</button>
             </div> 
            
))}
</div>
<hr></hr>

<Link to="/p2">
<div className="account">
<img src={image10} />
<img src={image9} />
<img src={image11} />
<img src={image8} />
</div>
</Link>



         </>
      )}
}
export default Home