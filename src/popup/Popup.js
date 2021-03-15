import React from 'react';

import './Popup.css';
import { store } from './index';

const Popup = () => {
  const onClick = (event) => {
    event.preventDefault();
    store.getState();
  }

  return (
    <div className="popup">
      <div style={{ padding: '0 30px', color: '#ffffff'}}>
        {store.getState().todos.items.length}
      </div>
    </div>
  );
};

export default Popup;
