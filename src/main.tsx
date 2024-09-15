import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    ),
  },
  {
    path: "/admin",
    element: (
      <React.StrictMode>
        <h1>Welcome to admin</h1>
      </React.StrictMode>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
