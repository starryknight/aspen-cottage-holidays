import React, { Component } from "react";
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class NewCabinPage extends Component {
  state = {
    user: {},
    cabins: [],
    // redirect:false
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
handleChange = (event) => {
  const inputName = event.target.name
  const userInput = event.target.value

  const newState = { ...this.state }
  newState[ inputName ] = userInput
  this.setState(newState)

}
handleSubmit = (e) => {
  e.preventDefault()
  if (this.props.match.params) {
  const userId = this.props.match.params.userId

  axios.post(`/api/users/${userId}/cabins/new`, this.state)
  .then((res) => {
    // this.setState({redirect: true})
    
    this.props.history.push(`/users/${userId}/cabins`)
    
  })
}
}


  render() {
    // if(this.state.redirect){
    //   return <Redirect 
    // }
    
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
            placeholder="Door and street"
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="City"
            type="text"
            name="city"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <select name="state" value={this.state.state} onChange={this.handleChange}>
            <option value="georgia">Georgia</option>
            <option value="colorado">Colorado</option>
            <option value="arizona">Arizona</option>
            <option value="mexico">Mexico</option>
          </select>

          <select name="smoking" value={this.state.smoking} onChange={this.handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <select name="limit" value={this.state.limit} onChange={this.handleChange}>
            <option value="2">Two</option>
            <option value="4">Four</option>
            <option value="6">Six</option>
            <option value="8">Eight</option>
          </select>
          <br/>
          <input type="date" value={this.state.date} onChange={this.handleChange}/>

          <button type="submit" >Submit</button>
        </form>
      </div>
    );
  }
}

export default NewCabinPage;
