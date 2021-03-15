import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Popup from './Popup';
import { Store } from 'webext-redux';
import { Provider } from 'react-redux';

export const store = new Store();

store
  .ready()
  .then(() => {
    // store.dispatch({ type: '@action.addTodoAsync', payload: 'new todo' });
    store
      .dispatch({ type: 'addTodoAsync', payload: 'new todo' })
      .then((result) => {
        console.log('client completed');
        console.log({ result });
      });
    ReactDOM.render(
      <Provider store={store}>
        <Popup text="Ext boilerplate" />, document.getElementById('root')
      </Provider>
    );
  });


