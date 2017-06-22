// @flow

import { connect } from 'react-redux'

import { commentsAddComment } from '../actions/comments'

import CommentForm from '../components/CommentForm'

const mapStateToProps = () => ({
  comment: null,
})

const mapDispatchToProps = dispatch => ({
  onSubmitComment: (comment) => {
    dispatch(commentsAddComment(comment))
  },
})

const AddComment = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentForm)

export default AddComment
