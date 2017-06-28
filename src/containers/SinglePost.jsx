// @flow

import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import {
  postsFetchPost,
  postsUpdatePost,
} from '../actions/posts'

import {
  commentsFetchData,
  commentsDeleteComment,
  commentsAddComment,
} from '../actions/comments'

import Post from '../components/Post'

const mapStateToProps = (state, ownProps) => ({
  postId: ownProps.match.params.postId,
  post: state.currentPost,
  postsHasErrored: state.postsHasErrored,
  postsHasErroredOnUpdate: state.postsHasErroredOnUpdate,
  postsIsLoading: state.postsIsLoading,
  postsIsSavingPost: state.postsIsSavingPost,
  comments: state.comments,
  commentsHasErrored: state.commentsHasErrored,
  commentsIsLoading: state.commentsIsLoading,
  commentsIsSaving: state.commentsIsSaving,
  commentsHasErroredOnSave: state.commentsHasErroredOnSave,
})

const mapDispatchToProps = (dispatch: Function) => ({
  fetchPost: (id: String) => {
    dispatch(postsFetchPost(id))
  },
  onSubmitPost: (post: Object) => {
    dispatch(postsUpdatePost(post))
  },
  fetchComments: (id: String) => {
    dispatch(commentsFetchData(id))
  },
  onDeleteComment: (id: String) => {
    dispatch(commentsDeleteComment(id))
  },
  onSubmitComment: (comment: Object) => {
    dispatch(commentsAddComment(comment))
  },
})

const SinglePost = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post))

export default SinglePost
