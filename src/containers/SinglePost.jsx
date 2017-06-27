// @flow

import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import {
  postsFetchPost,
} from '../actions/posts'

import {
  commentsFetchData,
  commentsRemoveComment,
  commentsAddComment,
} from '../actions/comments'

import Post from '../components/Post'

const mapStateToProps = (state, ownProps) => ({
  postId: ownProps.match.params.postId,
  post: state.currentPost,
  postsHasErrored: state.postsHasErrored,
  postsIsLoading: state.postsIsLoading,
  comments: state.comments,
  commentsHasErrored: state.commentsHasErrored,
  commentsIsLoading: state.commentsIsLoading,
})

const mapDispatchToProps = (dispatch: Function) => ({
  fetchPost: (id: String) => {
    dispatch(postsFetchPost(id))
  },
  fetchComments: (id: String) => {
    dispatch(commentsFetchData(id))
  },
  onDeleteComment: (id: String) => {
    dispatch(commentsRemoveComment(id))
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
