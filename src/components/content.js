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

    // Fetching API data from coinlore website and returning it to the project.
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

      // DATA TAKES 10 SECONDS TO UPDATE
    
      let coins = this.state.dataSource.map((val,key) =>{
          return <div className="cryptocurrency-market" key={key}>
          {/* Use of icons from react-icon framework */}
          {/* Displaying the name, symbol, price, and price update every 1 hour from the API data. */}
          <h4>{val.name}</h4>
          <h6>({val.symbol})</h6>
          <p id="price">${val.price_usd}</p>
          <p>{val.percent_change_1h}%</p>
          </div>
      });


    return (

      <div className="App-header">
      <br></br>
      <hr></hr>
       <div className="App-header">
        <h1>{coins}</h1>
       </div>
       <div>             
      </div>

      </div>

    
    );
    }
  }
}


export default Content;