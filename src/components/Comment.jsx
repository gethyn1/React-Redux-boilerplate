// @flow

import React from 'react'

type Props = {
  comment: Object,
  deleteComment: Function,
}

const Comment = ({ comment, deleteComment }: Props) => {
  const onClick = () => {
    deleteComment(comment.id)
  }

  return (
    <div>
      <strong>@{comment.user}</strong> {comment.text} - <button onClick={onClick} className="c-btn-link">X delete</button>
    </div>
  )
}

export default Comment
