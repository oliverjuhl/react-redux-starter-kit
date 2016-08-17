import React from 'react';

const Post = ({ posts, id }) => (
  <div className="content post">
    <div className="post-number">post no. {id}</div>
    <br />
    <div className="post-text">
      { posts[id] }
    </div>
    <input type="text" style={{ display: 'none' }} />
  </div>
);

Post.propTypes = {
  posts: React.PropTypes.array,
  id: React.PropTypes.number,
};

export default Post;
