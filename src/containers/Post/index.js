import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.params.nr
    };
  }

  render() {
    const { store } = this.context;
    const state = store.getState();
    return (
      <div className="content">
        <span>POST SUPER NR {this.state.id}</span>
        <br />
        {state.postReducer[this.state.id]}
        <input type="text" ref="post" style={{ display: 'none' }} />
      </div>
    );
  }
}

Post.propTypes = {
  params: React.PropTypes.object,
  'params.id': React.PropTypes.number
};

Post.contextTypes = {
  store: React.PropTypes.object
};

export default Post;
