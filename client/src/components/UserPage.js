import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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

        console.log('user', user)
        console.log('picture', picture)
        return (
            <div>
                <img src={picture} alt="picture"/>
                <p>User Name: <span> {userName}</span>.</p>
                {this.state.user.cabins? <p>{this.state.user.cabins[0].state}</p>: 
                null}
                <Link to={`${this.state.user._id}/cabins`}>Cabins Link</Link>
                
            </div>
        );
    }
}

export default UserPage;