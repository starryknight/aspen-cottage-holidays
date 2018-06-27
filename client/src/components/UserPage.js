import React, { Component } from 'react';

class UserPage extends Component {
    state = {
        users: {
            cabins: []
        }
    }
    render() {
        
        return (
            <div>
               <h1>Hello user</h1> 
            </div>
        );
    }
}

export default UserPage;