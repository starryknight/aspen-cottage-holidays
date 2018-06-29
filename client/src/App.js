import React, { Component } from 'react'
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import UserPage from './components/UserPage'
import CabinsPage from './components/CabinsPage'
import ActivityPage from './components/ActivityPage'
import NewCabinPage from './components/NewCabinPage'
import EditCabinPage from './components/EditCabinPage';

class App extends Component {
  state = {
    users: []
  }
  componentDidMount () {
    axios.get('/api/users').then((res) => {
      // console.log(res.data)
      this.setState({ users: res.data })
      // console.log('this should be the res data', res.data)
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
            <Route  exact path="/users/:userId" component={UserPage} />
            <Route  exact path="/users/:userId/cabins" component={CabinsPage} />
            <Route  exact path="/users/:userId/cabins/new" component={NewCabinPage} />
            <Route  exact path="/users/:userId/cabins/:cabinId/activity" component={ActivityPage} />
            <Route  exact path="/users/:userId/cabins/:cabinId/edit" component={EditCabinPage} />
          <Route  exact path="/users/:userId/cabins/:cabinId/activity" component={ActivityPage} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;




  

  

  
      
 


