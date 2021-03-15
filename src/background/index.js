console.log('Background.js file loaded');
import { wrapStore, alias } from 'webext-redux';
import { createStore } from 'easy-peasy';
import { initial } from '../store/store';

const addTodoAsync = (action) => {
  return () => {
    return store.getActions().waitAndAddTodo(action.payload).then(result => {
      action.payload = result;
      return action;
    });
  }
}

const reduxPromiseResponder = (dispatchResult, send) => {
  Promise
    .resolve(dispatchResult.payload.promise) // pull out the promise
    .then((res) => {
      // if success then respond with value
      send({ error: null, value: res });
    })
    .catch((err) => {
      // if error then respond with error
      send({ error: err, value: null });
    });
};

const actionLogMiddleware = _ => next => action => {
  next(action);
}

const store = createStore(initial, {
  middleware: [alias({ addTodoAsync })]
});

wrapStore(store,
  // { dispatchResponder: reduxPromiseResponder, }
);
