import React, { Component } from "react";
import axios from 'axios'

class EditCabinPage extends Component {
  state = {
    user: {
    },
    cabins:[]
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

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.match.params) {
    const userId = this.props.match.params.userId
    const cabinId = this.props.match.params.cabinId

    axios.patch(`/api/users/${userId}/cabins/${cabinId}/edit`, this.state)
    .then((res) => {
      // this.setState({redirect: true})
      
      this.props.history.push(`/users/${userId}/cabins`)
      
    })
  }
  }
  handleChange = (event) => {
    const inputName = event.target.name
    const userInput = event.target.value
  
    const newState = { ...this.state }
    newState[ inputName ] = userInput
    this.setState(newState)
  
  }
  render() {
    
    return (
     
      <div>
        <form onSubmit={this.handleSubmit}>
        <input
            placeholder="picture"
            type="text"
            name="picture"
            value={this.state.picture}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder={this.state.address}
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder={this.state.password}
            type="text"
            name="city"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <select name="state" value={this.state.state}>
            <option value="georgia">Georgia</option>
            <option value="colorado">Colorado</option>
            <option value="arizona">Arizona</option>
            <option value="mexico">Mexico</option>
          </select>

          <select name="smoking" value={this.state.smoking}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <select name="limit" value={this.state.limit}>
            <option value="2">Two</option>
            <option value="4">Four</option>
            <option value="6">Six</option>
            <option value="8">Eight</option>
          </select>
          <br/>
          <input type="date"/>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EditCabinPage;
