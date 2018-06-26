import React, { Component } from 'react'
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'

class App extends Component {
  state = {
    users: []
  }
  componentDidMount () {
    axios.get('/api/users').then((res) => {
      this.setState({ users: res.data.users })
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
      <img src="https://www.brandcrowd.com/gallery/brands/pictures/picture14299092496285.png" alt=""/>
       <h1>Aspen Cottage Holidays</h1>
       <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/login">Log-In</Link>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" render={LogInPageWrapper} />
            
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;




  

  

  
      
 


