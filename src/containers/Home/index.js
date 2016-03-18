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

  render() {
    return (
      <div className="content">
        ADD POST <br />
        <input type="text" ref="newPost" />
        <button onClick={this.handleClick}>ADD</button>
      </div>
    );
  }
}

Home.contextTypes = {
  store: React.PropTypes.object
};

export default Home;
