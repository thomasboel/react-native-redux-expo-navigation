import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import List from './components/List';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <List />
      </Provider>
    );
  }
}

export default App;