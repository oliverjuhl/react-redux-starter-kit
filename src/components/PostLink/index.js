import React from 'react';
import { Link } from 'react-router';

const PostLink = (props) => (
  <div className="posts-list-item">
    post no. {props.nr}
    <Link className="posts-list-item-link" to={`/post/${props.nr}`}>link</Link>
  </div>
);

PostLink.propTypes = {
  nr: React.PropTypes.number
};

export default PostLink;
