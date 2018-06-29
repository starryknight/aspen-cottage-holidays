import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';


const CabinCover = styled.div`
border:solid;

`
const CabinContainer = styled.div`
border:solid;
display: flex;
padding:10px;
margin:10px;
`
class CabinPage extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    if (this.props.match.params) {
      const userId = this.props.match.params.userId;
      // console.log(userId)
      axios.get(`/api/users/${userId}`).then(res => {
        this.setState({ user: res.data });
      });
    }
  }
  handleDelete = (cabinId) => {
    if (this.props.match.params) {
        const userId = this.props.match.params.userId;
        console.log(cabinId)
        axios.delete(`/api/users/${userId}/cabins/${cabinId}`).then(res => {
            this.setState({ user: res.data.user });
        });
    }
    
}
  render(){
    const user = this.state.user || {};
    if (user.cabins) {
      var listOfCabins = user.cabins.map(cabin => {
        return (
            <CabinCover>
            
            <img src={cabin.picture} alt="look at cabin" />
            {cabin.state}
            <Link to={`cabins/${cabin._id}/activity`}>Activities</Link>
           
            <Link to={`cabins/${cabin._id}/edit`}>Update Cabin</Link>
            <button onClick={() => this.handleDelete(cabin._id)}>Delete</button>
            </CabinCover>
      );
      });
    }
    return (
        <div>
        
        
        <p>Cabin Page</p>
        <CabinContainer>
        {this.state.user.cabins ? <div>{listOfCabins}</div> : null}
        </CabinContainer>
        <Link to={`cabins/new`}>New Cabin</Link>
      
     
      
      </div>
    );
  }
  
}

export default CabinPage;
