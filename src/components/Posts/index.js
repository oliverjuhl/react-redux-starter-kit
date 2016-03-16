import React from 'react';
import PostLink from '../PostLink';
require('./Posts.scss');

const Posts = (props) => (
  <div>
    <div className="aaa">EEE</div>
    <PostLink nr="1" />
    <PostLink nr="2" />
    <PostLink nr="3" />
    <div><br /><br />
      {props.children}
    </div>
  </div>
);

Posts.propTypes = {
  children: React.PropTypes.object
};

export default Posts;
