import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class LogInPage extends Component {
    state = {
      userName: "",
      password: ""  
    }
    render() {
        return (
            <div>
                <form action="">
                <input type="text"
                placeholder = "Name"
                name="userName"
                
                />
    
                <br/>
                <input type="password"
                placeholder = "password"
                name="userName"
                />
                <br/>
                <button type="submit">Submit</button>
                
                </form>
            </div>
        );
    }
}

export default LogInPage;