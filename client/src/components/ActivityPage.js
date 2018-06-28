import React, { Component } from 'react';

class ActivityPage extends Component {
    state = {
        userId='',
        cabinId=''
    }
    componentDidMount() componentDidMount () {
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
        return (
            <div>
                <h1>Hello Activity page</h1>
            </div>
        );
    }
}

export default ActivityPage;