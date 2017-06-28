// @flow

import React from 'react'

import Comment from './Comment'

type Props = {
  comments: Array<Object>,
  onDeleteComment: Function,
  commentsHasErrored: boolean,
  commentsIsLoading: boolean,
}

class CommentList extends React.Component {
  constructor(props: Props) {
    super(props)

    this.deleteComment = this.deleteComment.bind(this)
  }

  props: Props
  deleteComment: Function

  deleteComment(id: string) {
    this.props.onDeleteComment(id)
  }

  render() {
    const commentItems = this.props.comments.map(comment => (
      <li className="c-comments__item">
        <Comment key={comment.id} comment={comment} deleteComment={this.deleteComment} />
      </li>
    ))

    if (this.props.commentsHasErrored) {
      return <p>Sorry, there was an error loading the comments</p>
    }

    if (this.props.commentsIsLoading) {
      return <p>Loading ...</p>
    }

    return (
      <div>
        <h2>{this.props.comments.length} comments:</h2>
        <ul className="o-list-bare c-comments">
          {commentItems}
        </ul>
      </div>
    )
  }
}

export default CommentList
