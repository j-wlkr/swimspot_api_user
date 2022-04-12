import React, { Component } from "react"

const api_url = 'http://localhost:3001/api/v1/spots'

class Spot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li>Spot#1</li>
          <li>Spot#2</li>
        </ul>
      </div>
    )
  }
}
export default Spot;
