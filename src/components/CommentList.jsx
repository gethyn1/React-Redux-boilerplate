// @flow

import React from 'react'

import Comment from './Comment'
import ListBare from './ListBare'

import styles from '../styles/components/_CommentList.scss'

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
    const {
      commentsHasErrored,
      commentsIsLoading,
      comments,
    } = this.props

    if (commentsHasErrored) {
      return <p>Sorry, there was an error loading the comments</p>
    }

    if (commentsIsLoading) {
      return <p>Loading ...</p>
    }

    if (!comments || !comments.length) {
      return <div><h2>No comments yet</h2></div>
    }

    const commentItems = comments.map(comment => (
      <li key={comment.id} className={styles.item}>
        <Comment comment={comment} deleteComment={this.deleteComment} />
      </li>
    ))

    return (
      <div>
        <h3>{comments.length} comments:</h3>
        <ListBare>
          {commentItems}
        </ListBare>
      </div>
    )
  }
}

export default CommentList
