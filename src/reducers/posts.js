// @flow

export const postsIsLoading = (state: any = false, action: Object) => {
  switch (action.type) {
    case 'POSTS_IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const postsIsSavingPost = (state: any = false, action: Object) => {
  switch (action.type) {
    case 'POSTS_IS_SAVING_POST':
      return action.isSaving
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

export const postsHasErroredOnUpdate = (state: any = false, action: Object) => {
  switch (action.type) {
    case 'POSTS_HAS_ERRORED_ON_UPDATE':
      return action.hasErroredOnUpdate
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
    case 'POSTS_FETCH_UPDATE_POST_SUCCESS':
      return action.post
    default:
      return state
  }
}
