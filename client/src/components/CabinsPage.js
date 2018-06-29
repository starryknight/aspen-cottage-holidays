import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

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
      // console.log(userId)
      axios.get(`/api/users/${userId}`).then(res => {
        this.setState({ user: res.data });
      });
    }
  }
  handleDelete = cabinId => {
    if (this.props.match.params) {
      const userId = this.props.match.params.userId;
      console.log(cabinId);
      axios.delete(`/api/users/${userId}/cabins/${cabinId}`)
      .then(res => {
        this.setState({ user: res.data.user });

            this.props.history.push(`/users/${userId}/cabins`)
      });
    }
  };
  render() {
    const user = this.state.user || {};
    if (user.cabins) {
      var listOfCabins = user.cabins.map(cabin => {
        return (
          <CabinCover>
            <div>
              <img src={cabin.picture} alt="look at cabin" />
            </div>
            {cabin.city} {cabin.state}
            <div>
              <button>
                <Link to={`cabins/${cabin._id}/activity`}>Activities</Link>
              </button>

              <button>
                <Link to={`cabins/${cabin._id}/edit`}>Update</Link>
              </button>
              <button onClick={() => this.handleDelete(cabin._id)}>
                Delete
              </button>
            </div>
          </CabinCover>
        );
      });
      console.log(user.cabins)
    }
    return (
      <div>
        <p>Cabin Page</p>
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
