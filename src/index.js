import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signup from './Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={appRouter} /> */}
    <Signup />
  </React.StrictMode>
);
