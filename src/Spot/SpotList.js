import React, { Component } from "react"
import SpotForm from './SpotForm'
import SpotItem from "./SpotItem"

const api_url = 'http://localhost:3001/api/v1/spots'

class SpotList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
      this.updateSpotList = this.updateSpotList.bind(this);
  }
  componentDidMount() {
    this.getDescriptions();
  }

  getDescriptions() {
    fetch(api_url)
    .then(response => response.json())
    .then(response_items => {
      this.setState({
        items: response_items
      })
    });
  }

  updateSpotList(item) {
    let _items = this.state.items
    _items.unshift(item)
    this.setState({
      items: _items
    })
  }

  render() {
    return (
      <div>
        <SpotForm api_url={api_url} updateSpotList={this.updateSpotList} />
        <ul id="spots">
          {this.state.items.map((item) => (
            <SpotItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    )
  }
}
export default SpotList;
