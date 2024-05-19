import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Index from './pages/index';
import Info from './pages/info';
import './styles/pages/global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/info',
    element: <Info />,
  },
]);

const root = document.getElementById('root');
if (!root) {
  throw new Error('root element not found');
}
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
