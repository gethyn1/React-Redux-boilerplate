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
      {comment.text}<br />
      <button onClick={onClick}>Delete this comment</button>
    </div>
  )
}

export default Comment
