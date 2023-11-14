import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import UserListPage from "./pages/userList";
import ErrorPage from "./pages/errorPage";
import UserDetailPage from './pages/userDetailsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children : [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/users",
        element: <UserListPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/users/:userId",
        element: <UserDetailPage />,
        errorElement: <ErrorPage />,
      },
    ]
  },

]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
