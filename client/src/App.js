import React, { Component } from 'react'
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import HomePage from './components/HomePage'
import UserPage from './components/UserPage'
import LogInPage from './components/LogInPage'

class App extends Component {
  state = {
    users: []
  }
  componentDidMount () {
    axios.get('/api/users').then((res) => {
      console.log(res.data)
      this.setState({ users: res.data.users })
      console.log('this should be the users data', res.data.users)
    }).catch((err) => {
      console.error(err)
    })
  }

  render() {
    const LogInPageWrapper = (props) => (
      <LogInPage users={this.state.users} {...props} />
    )
    return (
      <div className="App">
      
       <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/login">Log-In</Link>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" render={LogInPageWrapper} />
            <Route exact path="/users" component={UserPage} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;




  

  

  
      
 


