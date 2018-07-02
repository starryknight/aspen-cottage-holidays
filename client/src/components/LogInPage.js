import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import {
  Jumbotron,
  FormControl,
  Navbar,
  NavDropdown,
  MenuItem,
  Grid,
  Row,
  Col,
  Image,
  Button
} from "react-bootstrap";

const NameSelector = styled.div`
  background: orange;
  width: 140px;
  height: 50px;
  display:block link {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 170px;
    box-shadow: 5px 5px 5px silver;
    padding: 2px;
    z-index: 1;
  }
  NameSelector:hover {
    display: block;
  }
`;

class LogInPage extends Component {
  state = {
    userName: "",
    password: "",
    picture: ""
  };

  handleChange = event => {
    const inputName = event.target.name;
    const userInput = event.target.value;

    const newState = { ...this.state };
    newState[inputName] = userInput;
    this.setState(newState);
  };

  handleSubmit = event => {
    event.preventDefault();
    axios.post("/api/users", this.state).then(res => {
      console.log(res.data);
      this.props.history.push(`/users/${res.data._id}`);
    });
  };

  render() {
    const users = this.props.users || [];
    console.log(this.props);
    const listOfUsers = users.map(user => {
      return (
        <Link key={user._id} to={`/users/${user._id}`}>
          <option value="">{user.userName}</option>
        </Link>
      );
    });
    return (
      <div>
        <h2>Please Select Your User Name or sign-up</h2>
        <NavDropdown
          eventKey={3}
          title="Select User Name"
          id="basic-nav-dropdown"
        >
          <MenuItem eventKey={3.1}>{listOfUsers}</MenuItem>
        </NavDropdown>

        <h3>Create a New User</h3>

        <form onSubmit={this.handleSubmit}>
          <Col sm={3}>
            <FormControl
              placeholder="User Name"
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.handleChange}
            />
          </Col>
          <br />
          <br />
          <Col sm={3}>
            <FormControl
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Col>
          <br />
          <br />
          <Col sm={3}>
            <FormControl
              placeholder="picture"
              type="text"
              name="picture"
              value={this.state.picture}
              onChange={this.handleChange}
            />
          </Col>
          <br />
          <br />
          <label htmlFor="Arrival">Arrival Date:</label>
          <input
            type="date"
            name="arrival"
            value={this.state.Arrival}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

export default LogInPage;
