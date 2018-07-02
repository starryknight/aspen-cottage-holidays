import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  ButtonToolbar,
  Button
} from "react-bootstrap";

class ActivityPage extends Component {
  state = {
    user: {},
    cabins:[],
    activities: []
  };
  componentDidMount() {
    if (this.props.match.params) {
      const userId = this.props.match.params.userId;
      axios.get(`/api/users/${userId}`).then(res => {
        this.setState({ user: res.data });
      });
    }
  }
  handleDelete = cabinId => {
    if (this.props.match.params) {
      const userId = this.props.match.params.userId;
      console.log(cabinId);
      axios.delete(`/api/users/${userId}/cabins/${cabinId}/activities`).then(res => {
        this.setState({ user: res.data.user });

        this.props.history.push(`/users/${userId}/cabins/${cabinId}/activities`);
      });
    }
  };
  render() {
    const user = this.state.user || {};
    const cabins = this.state.user || {};
    const activity = this.state.user || {};
    if (user.cabins) {
      var listOfActivities = user.cabins.map(activity => {
        return (
          <div>
              <p>Activities:{this.state.user.activities}</p>
              <Button
                bsStyle="danger"
                onClick={() => this.handleDelete(activity._id)}
              >
                Delete Activity
              </Button>
           
          </div>
        );
      });
      
    }
    return (
      <div>
        <h2>Activity Page</h2>
        <div>
          {this.state.user.activities ? (
            <div>{listOfActivities}</div>
          ) : null}
        </div>
        <Link to={`/`}>Back To Home</Link>
      </div>
    );
  }
}

export default ActivityPage;
