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

        // if (user.cabins) {
        // var listOfCabins = user.cabins.map((cabin)=>{
        //     return <li key={user._id} to={`/users/${user._id}`}>{cabin}</li>
        // })
        // }
        console.log('user', user)
        console.log('picture', picture)
        return (
            <div>
                <img src={picture} alt="picture"/>
                <p>User Name: <span> {userName}</span>.</p>
                {this.state.user.cabins? <p>{this.state.user.cabins[0].state}</p>: 
                null}
                <button><a href={`${this.state.user._id}/cabins`}>Cabins</a></button>
                
            </div>
        );
    }
}

export default UserPage;