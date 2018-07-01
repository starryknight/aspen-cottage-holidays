import React, { Component } from "react";
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Jumbotron, Navbar, ControlLabel, FormGroup, FormControl,  NavDropdown, MenuItem, Grid, Row, Col, Image, Button } from 'react-bootstrap';


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
      
  <FormGroup controlId="formHorizontalEmail">
  <Col componentClass={ControlLabel} sm={2}>Picture:</Col>
        <Col sm={10}>
        <FormControl
            placeholder="picture"
            type="text"
            name="picture"
            value={this.state.picture}
            onChange={this.handleChange}
          />
           </Col>
          </FormGroup>
          <br />
          <br />
          <Col componentClass={ControlLabel} sm={2}>Address:</Col>
          <Col sm={10}>
          <FormControl
            placeholder="Door and street"
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          </Col>
          <br />
          <br/>
          <Col componentClass={ControlLabel} sm={2}>City:</Col>
          <Col sm={10}>
          <FormControl
            placeholder="City"
            type="text"
            name="city"
            value={this.state.password}
            onChange={this.handleChange}
          />
           </Col>
          <br />
          <br/>
          <Col sm={12}>
          <ControlLabel>State:</ControlLabel>{' '}
          <select name="state" value={this.state.state} onChange={this.handleChange}>
            <option value="georgia">Georgia</option>
            <option value="colorado">Colorado</option>
            <option value="arizona">Arizona</option>
            <option value="mexico">Mexico</option>
          </select>
          <ControlLabel>Smoking Allowed?</ControlLabel>{'   '}
          <select name="smoking" value={this.state.smoking} onChange={this.handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          
          <ControlLabel>Maximum Occupancy:</ControlLabel>{'    '}
          <select name="limit" value={this.state.limit} onChange={this.handleChange}>
            <option value="2">Two</option>
            <option value="4">Four</option>
            <option value="6">Six</option>
            <option value="8">Eight</option>
          </select>
          <ControlLabel>Reservation Date:</ControlLabel>{'  '}
          <input type="date" value={this.state.date} onChange={this.handleChange}/>
          </Col>
<br/>
<br/>
          <Button type="submit" >Submit</Button>
        </form>
      </div>
    );
  }
}

export default NewCabinPage;
