import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
  render() {
    const user = this.state.user || {};
    if (user.cabins) {
      var listOfCabins = user.cabins.map(cabin => {
        return (
          <li key={user._id}>
            {cabin.state}
            <img src={cabin.picture} />
            <Link to={`cabins/${cabin._id}/activity`}>Activities</Link>
            <button >Delete</button>
          </li>
        );
      });
    }
    return (
      <div>
        <p>Cabin Page</p>
        {this.state.user.cabins ? <div>{listOfCabins}</div> : null}
        <Link to={`cabins/new`}>New Cabin</Link>
      </div>
    );
  }
}

export default CabinPage;
