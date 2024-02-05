import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./routes/Home";
import ErrorPage from "./error-page";
import "./index.css";
import Destination from "./routes/Destination";
import Crew from "./routes/Crew";
import Technology from "./routes/Technology";
import Layout from "./routes/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />}/>
        <Route path="/technology" element={<Technology />}/>
      </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
