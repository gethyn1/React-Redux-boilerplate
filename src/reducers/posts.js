// @flow

export const postsIsLoading = (state: any = false, action: Object) => {
  switch (action.type) {
    case 'POSTS_IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const postsHasErrored = (state: any = false, action: Object) => {
  switch (action.type) {
    case 'POSTS_HAS_ERRORED':
      return action.hasErrored
    default:
      return state
  }
}

export const posts = (state: any = [], action: Object) => {
  switch (action.type) {
    case 'POSTS_FETCH_DATA_SUCCESS':
      return action.posts
    default:
      return state
  }
}

export const currentPost = (state: any = null, action: Object) => {
  switch (action.type) {
    case 'POSTS_FETCH_POST_SUCCESS':
      return action.post
    default:
      return state
  }
}
