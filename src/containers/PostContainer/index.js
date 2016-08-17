import React from 'react';
import Post from '../../components/Post';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  posts: state.postReducer,
  id: parseInt(ownProps.params.nr, 10),
});

const mapDispatchToProps = () => ({});

const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);

PostContainer.propTypes = {
  params: React.PropTypes.object,
  'params.id': React.PropTypes.number,
};

export default PostContainer;
