import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './redux/index';
import { Provider } from 'react-redux';
import { LightModeContextProvider } from './context/lightModeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <LightModeContextProvider>
    <Provider store = {store}>
        <App />
    </Provider>
    </LightModeContextProvider>
  </React.StrictMode>
);

