import { action, thunk } from 'easy-peasy';

export const initial = {
  todo: [],
  addTodo: action((state, payload) => {
    console.log('adding todo: ', payload);
    state.todo.push(payload);
  }),
  waitAndAddTodo: thunk((actions, payload) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        actions.addTodo(payload);
        resolve('hi');
      }, 5000);
    })
  }),
};
