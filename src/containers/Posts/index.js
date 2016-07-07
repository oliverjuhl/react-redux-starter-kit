import React from 'react';
import PostList from '../../components/PostList';
import { connect } from 'react-redux';

/*eslint-disable */
const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.postReducer,
    children: ownProps.children
  };
};

const mapDispatchToProps = () => {
  return {};
};
/*eslint-disable */

const Posts = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

Posts.propTypes = {
  children: React.PropTypes.object
};

export default Posts;
