import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, /*useParams*/} from "react-router-dom"; //use of useParams for userPage/:id
import store from './api/store.js'
import { Provider } from 'react-redux'

/** STYLE **/
  import './main.scss'

/** LAYOUT **/
  import Layout from "./Layout/Layout.jsx";

/** PAGES **/
  import HomePage from "./Pages/homePage.jsx";
  import SignInPage from "./Pages/SignInPage";
  import UserPage from "./Pages/UserPage.jsx";
  import ErrorPage from "./pages/ErrorPage.jsx";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="SignIn" element={<SignInPage />} />
          <Route path="UserPage" element={<UserPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
</React.StrictMode>,
)