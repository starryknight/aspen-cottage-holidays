import React, { Component } from 'react';
import axios from 'axios'

class UserPage extends Component {
    state ={
        user:{}
    }
    componentDidMount () {
        if (this.props.match.params) {
            const userId = this.props.match.params.userId
            // console.log(userId)
            axios
                .get(`/api/users/${userId}`)
                .then(res => {
                    this.setState({user: res.data})
                })
        }
    }
      
    render() {
        console.log(this.state.user)
        const user = this.state.user ||{}
        const userName = user.userName || ''
        const picture = user.picture || ''
        console.log('userName', userName)
        return (
            <div>
                <img src="{picture}" alt=""/>
                <p>User Name: <span> {userName}</span> </p>
                
            </div>
        );
    }
}

export default UserPage;