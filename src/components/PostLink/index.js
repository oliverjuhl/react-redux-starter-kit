import React from 'react';
import { Link } from 'react-router';

const PostLink = (props) => (
  <div>
    POST {props.nr}
    <Link to={`/post/${props.nr}`}> -></Link>
  </div>
);

PostLink.propTypes = {
  nr: React.PropTypes.number
};

export default PostLink;
