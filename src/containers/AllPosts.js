import { connect } from 'react-redux'

import { postsFetchData } from '../actions/posts'
import PostsList from '../components/PostsList'

const mapStateToProps = state => ({
  posts: state.posts.posts,
  hasErrored: state.posts.hasErrored,
  isLoading: state.posts.isLoading,
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => {
    dispatch(postsFetchData())
  },
})

const AllPosts = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsList)

export default AllPosts
