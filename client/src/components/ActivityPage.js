import React, { Component } from 'react';
import axios from 'axios'


class ActivityPage extends Component {
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
                <h1>Hello Activity page</h1>
            </div>
        );
    }
}

export default ActivityPage;