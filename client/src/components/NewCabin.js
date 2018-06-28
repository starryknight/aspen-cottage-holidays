import React, { Component } from 'react';

class NewCabin extends Component {
    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
          <input
            placeholder="User Name"
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="picture"
            type="text"
            name="picture"
            value={this.state.picture}
            onChange={this.handleChange}
          />
          <br />
          {/* <input
            type="date"
            name="password"
            value={this.state.Arrival}
            onChange={this.handleChange}
          /> */}

          <button type="submit">Submit</button>
        </form> 
            </div>
        );
    }
}

export default NewCabin;