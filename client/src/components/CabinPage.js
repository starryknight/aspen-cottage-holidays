import React, { Component } from 'react'
import axios from 'axios'


class CabinPage extends Component {
  state = {
    user: {},
    cabins: []
  }

  componentDidMount () {
    const userId = this.props.match.params.userId

    axios.get(`/api/users/${userId}`).then((res) => {
      this.setState({
        user: res.data.user,
        cabins: res.data.user.cabins
      })
    })
  }

  createNewCabin = () => {
    const userId = this.props.match.params.userId

    axios.post(`/api/users/${userId}/cabins`).then((res) => {
      this.setState({
        user: res.data.user,
        cabins: res.data.user.cabins
      })
    })
  }

  updateCabin = (cabinId) => {
    const userId = this.props.match.params.userId
    const cabinToSend = this.state.cabins.find(cabin => cabin._id === cabinId)
    axios.patch(`/api/users/${userId}/cabins/${cabinId}`, cabinToSend).then((res) => {
      this.setState({
        user: res.data.user,
        cabins: res.data.user.cabins
      })
    })
  }

  deleteCabin = (cabinId) => {
    const userId = this.props.match.params.userId

    axios.delete(`/api/users/${userId}/cabins/${cabinId}`).then((res) => {
      this.setState({
        user: res.data.user,
        cabins: res.data.user.cabins
      })
    })
  }

  handleChange = (event, cabinId) => {
    console.log('hello there')
    console.log(cabinId)
    const newCabinsArray = [ ...this.state.cabins ]
    const newCabin = newCabinsArray.find(cabin => cabin._id === cabinId)
    console.log(newCabin)
    const inputName = event.target.name
    const userInput = event.target.value

    newCabin[ inputName ] = userInput

    this.setState({ cabins: newCabinsArray })
  }

  render () {
    return (
      <div>
        <TitleStyles>
          <h1>{this.state.user.userName}'s Cabin</h1>
          <button onClick={this.createNewCabin}>New Cabin</button>
        </TitleStyles>
        <PostItContainer>
          {this.state.cabins.map(cabin => {
            return (
              <PostItNote key={cabin._id}>
                <DeleteButton onClick={() => this.deleteCabin(cabin._id)}>
                  <button>X</button>
                </DeleteButton>
                <input
                  type="text"
                  name="title"
                  value={cabin.title}
                  onChange={(event) => this.handleChange(event, cabin._id)}
                  onBlur={() => this.updateCabin(cabin._id)}
                />
                <textarea
                  name="description"
                  value={cabin.description}
                  onChange={(event) => this.handleChange(event, cabin._id)}
                  onBlur={() => this.updateCabin(cabin._id)}
                />
              </PostItNote>
            )
          })}
        </PostItContainer>
      </div>
    )
  }
}
export default CabinPage