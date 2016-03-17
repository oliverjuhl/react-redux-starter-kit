import React from 'react';
import MainMenu from '../MainMenu';

const App = (props) => (
  <div>
    <MainMenu />
    {props.children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.object
};

export default App;
