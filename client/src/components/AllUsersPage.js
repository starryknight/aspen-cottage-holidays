import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AllUsersPage extends Component {
    render() {
        console.log(this.props.users)
        const listOfUsers = this.props.users.map((user)=>{
            return <li>{user.userName}</li>
            // (user.userName)

        })
        return (
            <div>
                <h1>Hello</h1>
<p>{listOfUsers}</p>
            </div>
        );
    }
}

export default AllUsersPage;