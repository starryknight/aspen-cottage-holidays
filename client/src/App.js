import React, { Component } from "react";
import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import HomePage from "./components/HomePage";
import LogInPage from "./components/LogInPage";
import UserPage from "./components/UserPage";
import CabinsPage from "./components/CabinsPage";
import ActivityPage from "./components/ActivityPage";
import NewCabinPage from "./components/NewCabinPage";
import EditCabinPage from "./components/EditCabinPage";
import {
  Navbar,
  FormGroup,
  FormControl,
  Image,
  Button
} from "react-bootstrap";

class App extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    axios
      .get("/api/users")
      .then(res => {
        // console.log(res.data)
        this.setState({ users: res.data });
        // console.log('this should be the res data', res.data)
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const LogInPageWrapper = props => (
      <LogInPage users={this.state.users} {...props} />
    );

    return (
      <div className="App">
        <Router>
          <div>
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <Image src="https://www.brandcrowd.com/gallery/brands/pictures/picture14299092496285.png" />
                </Navbar.Brand>
                <Navbar.Brand>
                  <Link to="/">Home</Link>
                </Navbar.Brand>
                <Navbar.Brand>
                  <Link to="/login">Log-In</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Navbar.Form pullRight>
                  <FormGroup>
                    <FormControl type="text" placeholder="Search" />
                  </FormGroup>{" "}
                  <Button type="submit">Submit</Button>
                </Navbar.Form>
              </Navbar.Collapse>
            </Navbar>

            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" render={LogInPageWrapper} />
              <Route exact path="/users/:userId" component={UserPage} />
              <Route
                exact
                path="/users/:userId/cabins"
                component={CabinsPage}
              />
              <Route
                exact
                path="/users/:userId/cabins/new"
                component={NewCabinPage}
              />
              <Route
                exact
                path="/users/:userId/cabins/:cabinId/activities"
                component={ActivityPage}
              />
              <Route
                exact
                path="/users/:userId/cabins/:cabinId/edit"
                component={EditCabinPage}
              />
              <Route
                exact
                path="/users/:userId/cabins/:cabinId/activity"
                component={ActivityPage}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
