import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ButtonToolbar, Button } from "react-bootstrap";

class ActivityPage extends Component {
  state = {
    user: {},
    cabins: [],
    activities: []
  };
  componentDidMount() {
    if (this.props.match.params) {
      const userId = this.props.match.params.userId;
      axios.get(`/api/users/${userId}`).then(res => {
        this.setState({ user: res.data });
      });
    }
    this.getAllActivities();
  }

  getAllActivities() {
    const userId = this.props.match.params.userId;
    const cabinId = this.props.match.params.cabinId;
    axios
      .get(`/api/users/${userId}/cabins/${cabinId}/activities`)
      //   /api/users/:userId/cabins/:cabinId/activities
      .then(res => {
        this.setState({ activities: res.data });
      });
  }

  handleDelete = cabinId => {
    if (this.props.match.params) {
      const userId = this.props.match.params.userId;
      console.log(cabinId);
      axios
        .delete(`/api/users/${userId}/cabins/${cabinId}/activities`)
        .then(res => {
          this.setState({ user: res.data.user });

          this.props.history.push(
            `/users/${userId}/cabins/${cabinId}/activities`
          );
        });
    }
  };
  render() {
    const user = this.state.user || {};
    const cabins = this.state.user || {};
    const activity = this.state.user || {};
    const userId = this.props.match.params.userId;
    const cabinId = this.props.match.params.cabinId;
    if (user.cabins) {
      var listOfActivities = this.state.activities.map(activity => {
        return (
          <div>
            <p>Activities:{activity.name}</p>
            <Button
              bsStyle="danger"
              onClick={() => this.handleDelete(activity._id)}
            >
              Delete Activity
            </Button>
            <Link to={`/users/${userId}/cabins`}>Back To Cabin</Link>
          </div>
        );
      });
    }
    return (
      <div>
        <h2>Activity Page</h2>
        <div>
          <div>{listOfActivities}</div>
        </div>
      </div>
    );
  }
}

export default ActivityPage;
