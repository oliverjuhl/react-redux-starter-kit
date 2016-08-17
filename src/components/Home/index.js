import React from 'react';

const Home = ({ handleClick }) => {
  let input = '';
  return (
  <div className="content home-form">
    <div className="home-form-title">add post</div>
    <textarea className="home-form-input"
      rows="3"
      type="text"
      ref={ node => {input = node;}}
      placeholder="Your post">
    </textarea>
    <button className="home-form-button"
      onClick={() => {
        if (!input.value) {
          return;
        }
        handleClick(input.value);
        input.value = '';
      }}>add
    </button>
  </div>);
};

Home.propTypes = {
  handleClick: React.PropTypes.func,
};

export default Home;
