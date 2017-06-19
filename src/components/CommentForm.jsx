// @flow

import React from 'react'
import shortid from 'shortid'

type Props = {
  comment: Object,
  onSubmitComment: Function,
}

class CommentForm extends React.Component {
  constructor(props: Props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e: Event) {
    e.preventDefault()

    this.props.onSubmitComment({
      id: shortid.generate(),
      text: this.refs.comment.value,
      user: this.refs.author.value,
    })

    this.refs.commentForm.reset()
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} ref="commentForm">
        <input type="text" ref="author" placeholder="Name" /><br />
        <textarea ref="comment" placeholder ="Comment"></textarea><br />
        <button type="submit">Post comment</button>
      </form>
    )
  }
}

export default CommentForm
