import React from 'react';
import MainMenu from '../MainMenu';

const App = (props) => (
  <div>
    <MainMenu />
    <div className="bp-navigation-main">
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.object
};

export default App;
