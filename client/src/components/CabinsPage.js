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

const CabinCover = styled.div`
  margin: 10px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px grey;
  button {
    margin: 5px;
  }
`;
const CabinContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin: 10px;
`;
class CabinPage extends Component {
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
          <CabinCover>
            <Link to={`cabins/${cabin._id}`}>
              <div>
                <img src={cabin.picture} alt="look at cabin" />
              </div>
            </Link>
            {cabin.city} {cabin.state}
            <ButtonToolbar>
              <Button>
                <Link to={`cabins/${cabin._id}/activity`}>Activities</Link>
              </Button>
              <Button>
                <Link to={`cabins/${cabin._id}/edit`}>Update</Link>
              </Button>
              <Button
                bsStyle="danger"
                onClick={() => this.handleDelete(cabin._id)}
              >
                Delete
              </Button>
            </ButtonToolbar>
          </CabinCover>
        );
      });
      
    }
    return (
      <div>
        <h2>Cabin Page</h2>
        <div>
          {this.state.user.cabins ? (
            <CabinContainer>{listOfCabins}</CabinContainer>
          ) : null}
        </div>
        <Link to={`cabins/new`}>New Cabin</Link>
      </div>
    );
  }
}

export default CabinPage;
