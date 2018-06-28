import React, { Component } from 'react';
import axios from 'axios'


class ActivityPage extends Component {
    state ={
        user:{}
    }
    componentDidMount () {
        if (this.props.match.params) {
            const userId = this.props.match.params.userId
           
            axios
                .get(`/api/users/${userId}`)
                .then(res => {
                    this.setState({user: res.data})
                })
        }
    }
    render() {
        const user = this.state.user ||{}
         if (user.cabins) {
        var listOfActivities = user.cabins.activities.map((activity)=>{
            return <li>{activity.name}</li>     
        })
        }
        return (
            <div>
                <p>Activity Page</p>
                {this.state.user.cabins.activities? <div>{listOfActivities}</div>: 
                null}
                
            </div>
        );
    }
}

export default ActivityPage;