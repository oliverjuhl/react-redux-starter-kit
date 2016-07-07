import React from 'react';
import PostList from '../../components/PostList';
import { connect } from 'react-redux';

/*eslint-disable */
const mapStateToProps = (state, props) => {
  return {
    postReducer: state.postReducer,
    children: props.children
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
