import React, { Component } from 'react';

class UserPage extends Component {
    render() {
        return (
            <div>
                <p>hello user</p>
                <p>{this.props.user}</p>
            </div>
        );
    }
}

export default UserPage;