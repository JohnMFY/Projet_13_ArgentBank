import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './main.scss'

/** LAYOUT **/
import Layout from "./Layout/Layout.jsx";

/** PAGES **/
import HomePage from "./Pages/homePage.jsx";
import SignInPage from "./Pages/SignInPage";
import UserPage from "./Pages/UserPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx"

const root = document.getElementById("root");

//mettre /:id pour le path /UserPage
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/SignIn" element={<SignInPage/>}/>
        <Route path="/UserPage" element={<UserPage/>}/>
        <Route path="*"  element={<ErrorPage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);