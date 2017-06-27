// @flow

import React from 'react'
import shortid from 'shortid'

type Props = {
  postId: String,
  onSubmitComment: Function,
}

type State = {
  text: ?string,
  user: ?string,
}

class CommentForm extends React.Component {

  constructor(props: Props) {
    super(props)

    this.state = {
      text: '',
      user: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state: State
  props: Props
  handleChange: Function
  handleSubmit: Function

  handleChange(event: Event & { target: HTMLInputElement }) {
    const name = event.target.name
    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit(event: Event) {
    event.preventDefault()

    this.props.onSubmitComment({
      id: shortid.generate(),
      postId: this.props.postId,
      text: this.state.text,
      user: this.state.user,
    })

    this.setState({
      text: '',
      user: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="user" type="text" placeholder="Name" value={this.state.user} /><br />
        <textarea onChange={this.handleChange} name="text" placeholder="Comment" value={this.state.text} /><br />
        <button type="submit">Post comment</button>
      </form>
    )
  }
}

export default CommentForm
