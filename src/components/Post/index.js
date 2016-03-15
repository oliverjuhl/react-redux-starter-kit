import React from 'react';

const Post = (props) => {
  const id = props.params.nr;

  return (
    <div>
      <span>POST SUPER NR {id}</span>
      <br />
      To jest super poscik
    </div>
  );
};

Post.propTypes = {
  params: React.PropTypes.object,
  'params.id': React.PropTypes.string
};

export default Post;
