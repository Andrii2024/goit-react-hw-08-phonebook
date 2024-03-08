import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
const basename = 'goit-react-hw-08-phonebook';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={basename}>
    {/* <BrowserRouter> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
