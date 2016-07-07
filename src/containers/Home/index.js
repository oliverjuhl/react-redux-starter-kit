import React from 'react';
import { addPost } from '../../actions/index';

class Home extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  /*eslint-disable */
  render() {
    const { store } = this.context;
    return (
      <div className="content home-form">
        <div className="home-form-title">add post</div>
        <textarea className="home-form-input" rows="3" type="text" ref={ node => {this.input = node}} placeholder="Your post"></textarea>
        <button className="home-form-button" onClick={() => {
          if(!this.input.value) {
            return;
          }
          store.dispatch(addPost(this.input.value));
          this.input.value = '';
        }}>add</button>
      </div>
    );
  }
  /*eslint-disable */
}

Home.contextTypes = {
  store: React.PropTypes.object
};

export default Home;
