import React from 'react';
import PostList from '../../components/PostList';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  posts: state.postReducer,
  children: ownProps.children,
});

const mapDispatchToProps = () => ({});

const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

PostsContainer.propTypes = {
  children: React.PropTypes.object,
};

export default PostsContainer;
