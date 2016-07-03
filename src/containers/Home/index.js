import React from 'react';
import ReactDOM from 'react-dom';
import { addPost } from '../../actions/index';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { store } = this.context;
    const newPost = ReactDOM.findDOMNode(this.refs.newPost).value.trim();
    if (!newPost) {
      return;
    }
    ReactDOM.findDOMNode(this.refs.newPost).value = '';
    store.dispatch(addPost(newPost));
  }

  /*eslint-disable */
  render() {
    return (
      <div className="content home-form">
        <div className="home-form-title">add post</div>
        <textarea className="home-form-input" rows="3" type="text" ref="newPost" placeholder="Your post"></textarea>
        <button className="home-form-button" onClick={this.handleClick}>add</button>
      </div>
    );
  }
  /*eslint-disable */
}

Home.contextTypes = {
  store: React.PropTypes.object
};

export default Home;
