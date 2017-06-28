// @flow

import React from 'react'
import shortid from 'shortid'

import Button from './Button'

type Props = {
  postId: String,
  onSubmitComment: Function,
  commentsIsSaving: boolean,
  commentsHasErroredOnSave: boolean,
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
    if (this.props.commentsIsSaving) {
      return <p>Saving comment ...</p>
    }

    if (this.props.commentsHasErroredOnSave) {
      return <p>There was an error saving the comment</p>
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <input onChange={this.handleChange} name="user" type="text" placeholder="Name" value={this.state.user} />
        </p>
        <p>
          <textarea onChange={this.handleChange} name="text" placeholder="Comment" value={this.state.text} />
        </p>
        <Button text="Post that comment" type="submit" />
      </form>
    )
  }
}

export default CommentForm
