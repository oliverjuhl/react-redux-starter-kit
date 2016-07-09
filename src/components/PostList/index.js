import React from 'react';
import PostLink from '../PostLink';

const PostList = ({ posts, children }) => (
  <div className="content">
    <div className="posts-list">
      { posts.map(
        (post, index) => (<PostLink key={index} nr={index} text={post} />)
      ) }
    </div>
    <div><br /><br />
      {children}
    </div>
  </div>
);

PostList.propTypes = {
  posts: React.PropTypes.array,
  children: React.PropTypes.object
};

export default PostList;
