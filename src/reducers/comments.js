// @flow

export const commentsHasErrored = (state: any = false, action: Object) => {
  switch (action.type) {
    case 'COMMENTS_HAS_ERRORED':
      return action.hasErrored
    default:
      return state
  }
}

export const commentsHasErroredOnSave = (state: any = false, action: Object) => {
  switch (action.type) {
    case 'COMMENTS_HAS_ERRORED_ON_SAVE':
      return action.hasErroredOnSave
    default:
      return state
  }
}

export const commentsHasErroredOnDelete = (state: any = false, action: Object) => {
  switch (action.type) {
    case 'COMMENTS_HAS_ERRORED_ON_DELETE':
      return action.hasErroredOnDelete
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

export const commentsIsSaving = (state: any = false, action: Object) => {
  switch (action.type) {
    case 'COMMENTS_IS_SAVING':
      return action.isSaving
    default:
      return state
  }
}

export const comments = (state: any = [], action: Object) => {
  switch (action.type) {
    case 'COMMENTS_FETCH_DATA_SUCCESS':
      return action.comments

    case 'COMMENTS_ADD_COMMENT_SUCCESS':
      return [
        ...state,
        action.comment,
      ]

    case 'COMMENTS_DELETE_COMMENT_SUCCESS':
      return state.filter(comment => comment.id !== action.id)
    default:
      return state
  }
}
