import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import MainMenu from './components/MainMenu';
import NoMatch from './components/NoMatch';
import Post from './components/Post';
import About from './components/About';
import Posts from './components/Posts';

const App = (props) => (
    <div>
      <MainMenu />
      {props.children}
    </div>
);

App.propTypes = {
  children: React.PropTypes.object
};

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="about" component={About} />
        <Route path="posts" component={Posts}>
          <Route path="/post/:nr" component={Post} />
        </Route>
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  ), document.getElementById('root')
);
