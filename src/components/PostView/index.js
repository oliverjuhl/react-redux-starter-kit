import React from 'react';

const PostView = ({ posts, id }) => (
  <div className="content post">
    <div className="post-number">post no. {id}</div>
    <br />
    <div className="post-text">
      { posts[id] }
    </div>
    <input type="text" style={{ display: 'none' }} />
  </div>
);

PostView.propTypes = {
  posts: React.PropTypes.array,
  id: React.PropTypes.number,
};

export default PostView;
