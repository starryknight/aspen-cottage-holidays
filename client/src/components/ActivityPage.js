import React, { Component } from 'react';
import axios from 'axios'
import { Jumbotron, Navbar, ControlLabel, FormGroup, FormControl,  NavDropdown, MenuItem, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class ActivityPage extends Component {
    state = {
        user: {
        },
        cabins:[]
      };
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
        return (
            <div>
                <div>{this.props.match.params.cabinId}</div>
                <h1>Hello Activity page</h1>
                <div>
                <Image src="" alt="this User" circle/>
                <p>User Name: <span> </span>.</p>
                {this.state.user.cabins? <p>{this.state.user.cabins.state}</p>: 
                null}
                  <Button
                bsStyle="danger"
                onClick={() => this.handleDelete}
              >
                Delete
              </Button>
                <Link to={this.state}> Cabins Link</Link>
                
            </div>
            </div>
        );
    }
}

export default ActivityPage;