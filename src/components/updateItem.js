import React from 'react';
import Card from 'react-bootstrap/Card';
import {FaRegEdit} from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';
import { TextField } from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import UserItem from './userItem';
import swal from 'sweetalert';





class UpdateItem extends React.Component{

    constructor(props){
      super(props);

      this.state = { BTCADD:'',
                    _id:''};

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleBTCChange = this.handleBTCChange.bind(this);
    }
  // componentDidMount(){
  // alert(this.props.match.params.id);

  // axios.get('http://localhost:4000/api/coins/'+this.props.match.params.id)
  // .then((response)=>{
  //     this.setState({
  //         _id:response.data._id,
  //         BTCADD:response.data.btc
  //     })
  // })
  // .catch();
  // }


  handleBTCChange(e){
  this.setState({BTCADD: e.target.value});
  }

  handleSubmit(e){
    swal("Congratulations!", "You have updated your account!", "success");
    e.preventDefault();

  const updateUser = {
      btc: this.state.BTCADD
  };
  
  axios.put('http://localhost:4000/api/coins/'+this.state._id, 
  updateUser)
  .then()
  .catch();


this.setState({BTCADD:''});    
}

    render(){
      return(
        <div>
            <h1>Hello from Edit component</h1>
            <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label>ENTER NEW BTC ADDRESS</label>
              <textarea
              row='3'
              className='form-control'
              value={this.state.BTCADD}
              onChange={this.handleBTCChange}
              ></textarea>
            </div>
            <div>
              <input
              type="submit"
              value="UPDATE USER">
              </input>
            </div>
            </form>
                </div>
    )
    }
}
export default UpdateItem;