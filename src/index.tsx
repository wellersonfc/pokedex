import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./pages/Home/"
import Error404 from "./pages/Error404/";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />,
    errorElement: <Error404 />,
    children: [
      {}
    ]
  },
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
