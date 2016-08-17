import ReactDOM from 'react-dom';
import React from 'react';
import { Router, browserHistory } from 'react-router';
import NoMatch from './components/NoMatch';
import About from './components/About';
import App from './components/App';
import Post from './containers/Post';
import Posts from './containers/Posts';
import Home from './containers/Home';
import postReducer from './reducers/posts';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import './styles/main.scss';

const rootReducer = combineReducers({ postReducer, routing: routerReducer });

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const history = syncHistoryWithStore(browserHistory, store);

const container = document.getElementById('root');

export function __unload() {
  ReactDOM.unmountComponentAtNode(container);
}

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: '/about', component: About },
    {
      path: '/posts',
      component: Posts,
      childRoutes: [
       { path: '/post/:nr', component: Post },
      ],
    },
    { path: '/home', component: Home },
    { path: '*', component: NoMatch },
  ],
};


ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  ), container
);
