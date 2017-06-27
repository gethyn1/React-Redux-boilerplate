import { connect } from 'react-redux'

import { postsFetchData } from '../actions/posts'
import PostsList from '../components/PostsList'

const mapStateToProps = state => ({
  posts: state.posts,
  hasErrored: state.postsHasErrored,
  isLoading: state.postsIsLoading,
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
