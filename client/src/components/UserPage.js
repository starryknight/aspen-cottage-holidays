import React, { Component } from 'react';
import axios from 'axios'

class UserPage extends Component {
    state ={
        user:{}
    }
    componentDidMount () {
        if (this.props.match.params) {
            const userId = this.props.match.params.userId
            console.log(userId)
            axios
                .get(`/api/users/${userId}`)
                .then(res => {
                    this.setState({user: res.data})
                })
        }
    }
      
    render() {
        const user = this.state.user
        console.log('user', user.user.userName)
        return (
            <div>
                <p>hello user</p>
                {user.userName}
            </div>
        );
    }
}

export default UserPage;