import React from 'react';

class Example extends React.Component {
  static state = {};

  constructor(props) {
    super(props);
    this.state = {
      lala: 'lele'
    };
  }

  render() {
    return (
      <div>
        <span>TOMEK</span><br/>
        {this.state.lala}
      </div>
    );
  }
}

export default Example;
