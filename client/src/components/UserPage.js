import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Jumbotron,
  Navbar,
  NavDropdown,
  MenuItem,
  Grid,
  Row,
  Col,
  Image,
  Button
} from "react-bootstrap";

class UserPage extends Component {
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
  handleDelete = userId => {
    if (this.props.match.params) {
      const userId = this.props.match.params.userId;
      console.log("usre id:", userId);
      axios.delete(`/api/users/${userId}`).then(res => {
        this.props.history.push(`/login`);
        window.location.reload();
      });
    }
  };

  render() {
    const user = this.state.user || {};
    const userName = user.userName || "";
    const picture = user.picture || "";

    return (
      <div>
        <Image src={picture} alt="this User" circle />
        <p>
          User Name: <span> {userName}</span>.
        </p>
        {this.state.user.cabins ? (
          <p>
            {this.state.user.cabins.state}
            <spa>{this.state.user.cabins.date}</spa>
          </p>
        ) : null}
        <Button bsStyle="danger" onClick={() => this.handleDelete(user._id)}>
          Delete
        </Button>
        <Link to={`${this.state.user._id}/cabins`}>Cabins Link</Link>
      </div>
    );
  }
}

export default UserPage;
