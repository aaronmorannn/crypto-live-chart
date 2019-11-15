import React from 'react';
import '../App.css';


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
          return <div className="cryptocurrency" key={key}>
          <h1>{val.name}</h1>
          <h3>{val.symbol}</h3>
          <h3>Rank {val.rank}</h3>
          <p>${val.price_usd}</p>
          <p>{val.percent_change_1h}%</p>
          </div>
      });


    return (

      <div>
      <h1 id="head">Welcome to the Crypto Marketplace</h1>
       <div className="App-header">
        <h1>{coins}</h1>
       </div>
 
      </div>
    
    );
    }
  }
}


export default Content;