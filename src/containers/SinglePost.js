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
  post: state.posts.post,
  postsHasErrored: state.posts.hasErrored,
  postsHasErroredOnUpdate: state.posts.hasErroredOnUpdate,
  postsIsLoading: state.posts.isLoading,
  postsIsSavingPost: state.posts.isSavingPost,
  comments: state.comments.comments,
  commentsHasErrored: state.comments.hasErrored,
  commentsIsLoading: state.comments.isLoading,
  commentsIsSaving: state.comments.isSaving,
  commentsHasErroredOnSave: state.comments.hasErroredOnSave,
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
