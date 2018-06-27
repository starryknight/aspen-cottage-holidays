import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class LogInPage extends Component {
  state = {
    userName:"",
      password: "",
    //   Arrival:null,
      picture: "",
  }

  handleChange = (event) => {
    const inputName = event.target.name
    const userInput = event.target.value

    const newState = { ...this.state }
    newState[ inputName ] = userInput
    this.setState(newState)

  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.post('/api/users', this.state).then((res) => {
      console.log(res.data)
      this.props.history.push(`/users/${res.data._id}`)
    })

    // make api call
  }

  render () {
    return (
      <div>
        <h1>Please Select A User</h1>
        {this.props.users.map((user) => {
          return (
            <Link key={user._id} to={`/user/${user._id}`}>{user.userName}</Link>
          )
        })}

        <h3>Create a User</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="User Name"
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
           <br/>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
           <br/>
          <input
            placeholder="picture"
            type="text"
            name="picture"
            value={this.state.picture}
            onChange={this.handleChange}
          />
          <br/>
          {/* <input
            type="date"
            name="password"
            value={this.state.Arrival}
            onChange={this.handleChange}
          /> */}

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default LogInPage