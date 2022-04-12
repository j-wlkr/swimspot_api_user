import React, { Component } from "react"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class SpotForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      api_url: props.api_url,
      description: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.formSubmit(event.target);
  }

  async formSubmit(formData) {
    let data = new FormData(formData);
    await fetch(this.state.api_url, {
      method: "POST",
      mode: "cors",
      body: data
    }).then(response => response.json())
    .then(response => this.props.updateSpotList(response))
  }

  handleDescriptionChange(event) {
    this.setState({
      task: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form
        onSubmit={this.handleSubmit}
        id="spot_form"
        autoComplete="off">
          <TextField
          id="description"
          label="SpotList Description"
          variant="outlined"
          type="text"
          name="spot[description]"
          onChange={this.handleDescriptionChange} />
          <Button variant="contained"
          color="primary"
          type="submit">Add Spot</Button>
        </form>
      </div>
    )
  }
}
export default SpotForm;
