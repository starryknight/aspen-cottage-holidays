import React, { Component } from "react";
import axios from 'axios'

class NewCabinPage extends Component {
  state = {
    picture:"",
      address: "",
      city: "",
      state: "",
      smoking: "",
      limit: ""
  }
  componentDidMount () {
    if (this.props.match.params) {
        const userId = this.props.match.params.userId
        // console.log(userId)
        axios
            .get(`/api/users/${userId}`)
            .then(res => {
                this.setState({user: res.data})
            })
    }
}
handleSubmit{
  //axios.post
  //then set state
  //res.data
}

  render() {
    const cabin = this.state.user ||{}
    const userName = user.userName || ''
    const picture = user.picture || ''

    return (
     
      <div>
        <form onSubmit={this.handleSubmit}>
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
          <br/>
          <input type="date"/>
  


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

export default NewCabinPage;
