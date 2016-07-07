import React from 'react';
import PostView from '../../components/PostView';
import { connect } from 'react-redux';

/*eslint-disable */
const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.postReducer,
    id: parseInt(ownProps.params.nr)
  };
};

const mapDispatchToProps = () => {
  return {};
};
/*eslint-disable */

const Post = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostView);

Post.propTypes = {
  params: React.PropTypes.object,
  'params.id': React.PropTypes.number
};

export default Post;
