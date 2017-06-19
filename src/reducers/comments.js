// @flow

const comments = (state: Array = [], action: { type: string }) => {
  switch (action.type) {
    case 'DELETE_COMMENT':
      return state.filter(comment => comment.id !== action.id)

    case 'ADD_COMMENT':
      return [
        ...state,
        action.comment,
      ]
    default:
      return state
  }
  return state
}

export default comments
