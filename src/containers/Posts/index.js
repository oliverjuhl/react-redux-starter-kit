import React from 'react';
import PostLink from '../../components/PostLink';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: ''
    };
  }

  render() {
    const { store } = this.context;
    const state = store.getState();
    return (
      <div className="content">
        { this.state.post }
        { state.postReducer.map(
          (post, index) => (<PostLink key={index} nr={index} text={post} />)
        ) }
        <div><br /><br />
          {this.props.children}
        </div>
        <input type="text" ref="wakoda" style={{ display: 'none' }} />
      </div>
    );
  }
}

Posts.propTypes = {
  children: React.PropTypes.object
};

Posts.contextTypes = {
  store: React.PropTypes.object
};

export default Posts;
