export const deleteComment = id => ({
  type: 'DELETE_COMMENT',
  id,
})

export const addComment = comment => ({
  type: 'ADD_COMMENT',
  comment,
})
