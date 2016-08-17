import React from 'react';
import PostView from '../../components/PostView';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  posts: state.postReducer,
  id: parseInt(ownProps.params.nr, 10),
});

const mapDispatchToProps = () => ({});

const Post = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostView);

Post.propTypes = {
  params: React.PropTypes.object,
  'params.id': React.PropTypes.number,
};

export default Post;
