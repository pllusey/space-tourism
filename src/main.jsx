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
import { data } from "./util";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout data={data} />}
      errorElement={<ErrorPage />}
    >
      <Route index element={<Home />} />
      <Route
        path="/destination"
        element={<Destination pageName={"Destination"} destinations={data.destinations} />}
      />
      <Route path="/crew"element={<Crew crew={data.crew}  pageName={"Crew"} />} />
      <Route
        path="/technology"
        element={<Technology pageName={"Technology"} technology={data.technology} />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
