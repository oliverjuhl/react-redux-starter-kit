import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import NoMatch from './components/NoMatch';
import About from './components/About';
import App from './components/App';
import Post from './containers/Post';
import Posts from './containers/Posts';
import Home from './containers/Home';
import postReducer from './reducers/posts';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import './styles/main.scss';

const rootReducer = combineReducers({ postReducer, routing: routerReducer });

const store = createStore(rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

const history = syncHistoryWithStore(browserHistory, store);

const renderAll = () => {
  ReactDOM.render(
    (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="posts" component={Posts} />
            <Route path="home" component={Home} />
            <Route path="/post/:nr" component={Post} />
            <Route path="*" component={NoMatch} />
          </Route>
        </Router>
      </Provider>
    ), document.getElementById('root')
  );
};

store.subscribe(renderAll);
renderAll();

