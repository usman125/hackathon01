import React from 'react';
import Router from './Routers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

class App extends React.Component {
  render() {
    const store = createStore(reducers, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}


export default App;