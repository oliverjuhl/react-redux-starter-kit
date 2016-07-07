import React from 'react';
import PostLink from '../PostLink';

const PostList = ({ postReducer, children }) => (
  <div className="content">
    <div className="posts-list">
      { postReducer.map(
        (post, index) => (<PostLink key={index} nr={index} text={post} />)
      ) }
    </div>
    <div><br /><br />
      {children}
    </div>
    <input type="text" style={{ display: 'none' }} />
  </div>
);

PostList.propTypes = {
  postReducer: React.PropTypes.array,
  children: React.PropTypes.object
};

export default PostList;
