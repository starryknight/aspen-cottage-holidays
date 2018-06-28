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
    const cabinId = 9;
    if (user.cabins) {
      var listOfCabins = user.cabins.map(cabin => {
        return (
          <li key={user._id}>
            {cabin.state}
            <img src={cabin.picture} />
            <Link to={`cabins/${cabin._id}/activity`}>Activities</Link>
          </li>
        );
      });
    }
    return (
      <div>
        <p>Cabin Page</p>
        {this.state.user.cabins ? <div>{listOfCabins}</div> : null}
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="User Name"
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="picture"
            type="text"
            name="picture"
            value={this.state.picture}
            onChange={this.handleChange}
          />
          <br />
          {/* <input
            type="date"
            name="password"
            value={this.state.Arrival}
            onChange={this.handleChange}
          /> */}

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CabinPage;
