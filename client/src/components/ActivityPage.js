import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import {
  Jumbotron,
  NavDropdown,
  ButtonToolbar,
  MenuItem,
  Grid,
  Row,
  Col,
  Image,
  Button
} from "react-bootstrap";



class ActivityPage extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    if (this.props.match.params) {
      const userId = this.props.match.params.userId;
      axios.get(`/api/users/${userId}`).then(res => {
        this.setState({ user: res.data });
      });
    }
  }
  handleDelete = cabinId => {
    if (this.props.match.params) {
      const userId = this.props.match.params.userId;
      console.log(cabinId);
      axios.delete(`/api/users/${userId}/cabins/${cabinId}`).then(res => {
        this.setState({ user: res.data.user });

        this.props.history.push(`/users/${userId}/cabins`);
      });
    }
  };
  render() {
    const user = this.state.user || {};
    if (user.cabins) {
      var listOfCabins = user.cabins.map(cabin => {
        return (
          <div>
           
                <img src={cabin.picture} alt="look at cabin" />
            
            {cabin.city} {cabin.state}
            <ButtonToolbar>
             
              <Button
                bsStyle="danger"
                onClick={() => this.handleDelete(cabin._id)}
              >
                Delete
              </Button>
            </ButtonToolbar>
          </div>
        );
      });
      
    }
    return (
      <div>
        <h2>Cabin Page</h2>
        <div>
          {this.state.user.cabins ? (
            <div>{listOfCabins}</div>
          ) : null}
        </div>
        <Link to={`/users/id`}>Back Cabin</Link>
      </div>
    );
  }
}

export default ActivityPage;
