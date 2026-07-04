import { useState } from "react";
import Root from "./routes/root/Root";
import Index from "./routes/root/Index";
import Overview from "./routes/overview/Overview";
import Create from "./routes/create/Create";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Edit from "./routes/edit/Edit";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        { index: true, element: <Index></Index> },
        { path: "overview", element: <Overview></Overview> },
        { path: "create", element: <Create></Create> },
        { path: "edit", element: <Edit></Edit> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
