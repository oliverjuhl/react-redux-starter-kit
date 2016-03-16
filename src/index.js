import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import MainMenu from './components/MainMenu';
import NoMatch from './components/NoMatch';
import Post from './components/Post';
import About from './components/About';
import Posts from './components/Posts';
import { combineReducers } from 'redux-immutable';
import postReducer from './reducers/posts';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addPost } from './actions/index';

const rootReducer = combineReducers({ postReducer });

const store = createStore(rootReducer);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      foo: 'bar'
    };
  }

  handleClick() {
    store.dispatch(addPost('eee'));
  }

  render() {
    return (
      <div>
        <MainMenu />
        {this.state.foo}
        {this.props.children}
        <input type="text" ref="text" />
        <button onClick={this.handleClick}>ADD</button>
      </div>
    );
  }
}

App.contextTypes = {
  store: React.PropTypes.object
};

App.propTypes = {
  children: React.PropTypes.object
};

const renderAll = () => {
  ReactDOM.render(
    (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="posts" component={Posts}>
              <Route path="/post/:nr" component={Post} />
            </Route>
            <Route path="*" component={NoMatch} />
          </Route>
        </Router>
      </Provider>
    ), document.getElementById('root')
  );
};

store.subscribe(renderAll);
renderAll();
