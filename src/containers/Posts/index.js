import React from 'react';
import PostLink from '../../components/PostLink';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: ''
    };
  }

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const state = store.getState();
    return (
      <div className="content">
        <div className="posts-list">
          { this.state.post }
          { state.postReducer.map(
            (post, index) => (<PostLink key={index} nr={index} text={post} />)
          ) }
        </div>
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
