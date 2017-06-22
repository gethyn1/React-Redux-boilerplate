// @flow

export const commentsHasErrored = (state: any = false, action: Object) => {
  switch (action.type) {
    case 'COMMENTS_HAS_ERRORED':
      return action.hasErrored
    default:
      return state
  }
}

export const commentsIsLoading = (state: any = false, action: Object) => {
  switch (action.type) {
    case 'COMMENTS_IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const comments = (state: any = [], action: Object) => {
  switch (action.type) {
    case 'COMMENTS_FETCH_DATA_SUCCESS':
      return action.comments

    case 'COMMENTS_ADD_COMMENT':
      return [
        ...state,
        action.comment,
      ]

    case 'COMMENTS_REMOVE_COMMENT':
      return state.filter(comment => comment.id !== action.id)
    default:
      return state
  }
}
