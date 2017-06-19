// @flow

import React from 'react'
import Comment from './Comment'

type Props = {
  comments: Array<Object>,
  onDeleteComment: Function,
}

const CommentList = ({ comments, onDeleteComment }: Props) => {
  const deleteComment = (id) => {
    onDeleteComment(id)
  }

  const commentItems = comments.map(comment => (
    <Comment key={comment.id} comment={comment} deleteComment={deleteComment} />
  ))

  return (
    <div>
      <h2>{comments.length} comments:</h2>
      <ul>
        {commentItems}
      </ul>
    </div>
  )
}

export default CommentList
