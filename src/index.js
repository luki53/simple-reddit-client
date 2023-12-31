// Redux importing
import { Provider } from 'react-redux';
import store from './app/util/store';

// React importing
import React from 'react';
import ReactDOM from 'react-dom/client';

// import React Rooter
import { RouterProvider } from 'react-router-dom';
import { router } from './app/Rooter';

// importing bootstrab css
import 'bootstrap/dist/css/bootstrap.min.css';

// import app
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

