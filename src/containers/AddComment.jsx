// @flow

import { connect } from 'react-redux'

import { addComment } from '../actions/comments'

import CommentForm from '../components/CommentForm'

const mapStateToProps = state => ({
  comment: null,
})

const mapDispatchToProps = dispatch => ({
    onSubmitComment: (comment) => {
      dispatch(addComment(comment))
    }
})

const AddComment = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentForm)

export default AddComment
