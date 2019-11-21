import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Purchase extends React.Component {

  
  constructor(props){
    super(props);

    this.state = {Amount:'',
                  Address:'',};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePurchaseAmount = this.handlePurchaseAmount.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }
  
  handlePurchaseAmount(e){
    this.setState({Amount: e.target.value});
  }

  handleAddressChange(e){
    this.setState({Address: e.target.value});
  }

  handleSubmit(e){
    alert("Your purchase for the amount €"+this.state.Amount+ " has been received check you updated balance in the Wallet tab. Sending to    " + this.state.Address 
    +" .....      ");
    e.preventDefault();
    
    
                const newPurchase = {
                  amount: this.state.Amount,
                  address: this.state.Address,
                };
          axios.post('http://localhost:4000/api/coins',newPurchase) 
          .then()
          .catch();
          
        this.setState({Amount:'',
              Address:''});    
  }

  render() {

    return (
      <div className="App-header">

        <form onSubmit={this.handleSubmit}>
        <div className='cryptocurrency-purchase'>
          <label id="head">Purchase Amount(BTC)</label>
          <h4 id="example">(Limit = 1BTC > €7500)</h4>
          <TextField
          type="number"
          id="standard-basic"
          label="Enter Value."
          margin="normal"
          required="true"
          InputProps={{ inputProps: { min: 0.0, max: 1, step:0.000001 } }}
          className='form-control'
          value={this.state.Amount}
          onChange={this.handlePurchaseAmount}
        />
        </div>
        
        <div className="cryptocurrency">
        <h4 id="example">(Example - 35zTpEpUkqgRNEsRvhonFBxHtwqiioqNhw)</h4>
        <TextField
          type="text"
          id="standard"
          label="Enter BTC Address."
          margin="normal"
          className='form-control'
          required="true"
          value={this.state.Address}
          onChange={this.handleAddressChange}
        />
        </div>
       
        <div>
          <Button
          type="submit"
          value="Preview Purchase"
          variant="contained" color="primary">
            Preview Purchase
          </Button>
        
        </div>
        </form>
      </div>
    );
  }
}

export default Purchase;