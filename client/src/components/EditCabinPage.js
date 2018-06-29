import React, { Component } from "react";
import axios from 'axios'

class EditCabinPage extends Component {
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

  updateCabin = cabinId => {
    const userId = this.props.match.params.userId;
    const cabinToSend = this.state.cabins.find(cabin => cabin._id === cabinId);
    axios
      .patch(`/api/users/${userId}/cabins/${cabinId}`, cabinToSend)
      .then(res => {
        this.setState({
          user: res.data.user,
          cabins: res.data.user.cabins
        });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.updateCabin}>
          <input
            placeholder="picture"
            type="text"
            name="picture"
            // value={this.state.picture}
            // onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Door and street"
            type="text"
            name="address"
            // value={}
            // onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="City"
            type="text"
            name="city"
            // value={this.state.password}
            // onChange={this.handleChange}
          />
          <br />
          <select name="state" id="">
            <option value="georgia">Georgia</option>
            <option value="colorado">Colorado</option>
            <option value="arizona">Arizona</option>
            <option value="mexico">Mexico</option>
          </select>

          <select name="smoking" id="">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <select name="limit" id="">
            <option value="2">Two</option>
            <option value="4">Four</option>
            <option value="6">Six</option>
            <option value="8">Eight</option>
          </select>
          <br />
          <input type="date" />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EditCabinPage;
