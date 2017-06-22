export const addComment = comment => ({
  type: 'ADD_COMMENT',
  comment,
})

export const commentsHasErrored = bool => ({
  type: 'COMMENTS_HAS_ERRORED',
  hasErrored: bool,
})

export const commentsIsLoading = bool => ({
  type: 'COMMENTS_IS_LOADING',
  isLoading: bool,
})

export const commentsFetchDataSuccess = comments => ({
  type: 'COMMENTS_FETCH_DATA_SUCCESS',
  comments,
})

export const commentsRemoveComment = id => ({
  type: 'COMMENTS_REMOVE_COMMENT',
  id,
})

export const commentsAddComment = comment => ({
  type: 'COMMENTS_ADD_COMMENT',
  comment,
})

// eslint-disable-next-line arrow-body-style
export const commentsFetchData = (url) => {
  return (dispatch) => {
    dispatch(commentsIsLoading(true))

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(commentsIsLoading(false))
        return response
      })
      .then(response => response.json())
      .then(comments => dispatch(commentsFetchDataSuccess(comments)))
      .catch(() => dispatch(commentsHasErrored(true)))
  }
}
