import React from 'react';
import '../App.css';
import {AiOutlineFire} from 'react-icons/ai';
import {FiActivity} from 'react-icons/fi';
import {FaGithub} from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';

class Content extends React.Component {

  constructor(props){
    super(props);
    this.state={
      isLoading: true,
      dataSource: null,
    }
  }



  componentDidMount(){
    return fetch('https://api.coinlore.com/api/tickers/')
    .then((response) => response.json())
    .then((responseJson)=>{
      this.setState({
        isLoading: false,
        dataSource: responseJson.data,
      })      

    })

    .catch((error) =>{
      console.log(error)
    });
  }

  render() {

    if(this.state.isLoading){
      return (
        <div></div>
      )
    } else{

      let coins = this.state.dataSource.map((val,key) =>{
          return <div className="cryptocurrency-market" key={key}>
          <h1><AiOutlineFire/> {val.rank}</h1>
          <hr></hr>
          <h1>{val.name}</h1>
          <h3>{val.symbol}</h3>
          <p id="price">${val.price_usd}</p>
          <p><FiActivity/>{val.percent_change_1h}%</p>
          </div>
      });


    return (

      <div className="App-header">
      <br></br>
      <h1 id="headMarket">Welcome to the Crypto Marketplace</h1>
      <hr></hr>
       <div className="App-header">
        <h1>{coins}</h1>
       </div>
       <div>       
         <hr></hr>
         
         <Nav.Link href="https://github.com/Moran98/crypto-wallet"><FaGithub/></Nav.Link> Author : Aaron Moran (G00356519)
         
      
      </div>

      </div>

    
    );
    }
  }
}


export default Content;