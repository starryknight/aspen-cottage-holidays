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
      
        const user = this.state.user ||{}
        const userName = user.userName || ''
        const picture = user.picture || ''

        return (
            <div>
                <img src={picture} alt="this cabin"/>
                <p>User Name: <span> {userName}</span>.</p>
                {this.state.user.cabins? <p>{this.state.user.cabins.state}</p>: 
                null}
                  
                <Link to={`${this.state.user._id}/cabins`}>Cabins Link</Link>
                
            </div>
        );
    }
}

export default UserPage;