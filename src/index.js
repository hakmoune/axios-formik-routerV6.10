import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FormikTest } from "./formik_test";
import { YupTest } from "./Yup_test";
import { YupFormikComponent } from "./FormikComponentYup";
import { YupFormikUseField } from "./Formik_useFeild";
import { Menu } from "./UI/Menu";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/useFormik",
    element: <FormikTest />,
    errorElement: <ErrorPage />
  },
  {
    path: "/yup",
    element: <YupTest />,
    errorElement: <ErrorPage />
  },
  {
    path: "/formikComponent",
    element: <YupFormikComponent />,
    errorElement: <ErrorPage />
  },
  {
    path: "/useFeild",
    element: <YupFormikUseField />,
    errorElement: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Menu />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
