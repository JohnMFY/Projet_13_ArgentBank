import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, /*useParams*/} from "react-router-dom"; //use of useParams for userPage/:id
//import { Provider } from 'react-redux';
// add :
// import { store } from './api/store.js';

/** STYLE **/
  import './main.scss'

/** LAYOUT **/
  import Layout from "./Layout/Layout.jsx";

/** PAGES **/
  import HomePage from "./Pages/homePage.jsx";
  import SignInPage from "./Pages/SignInPage";
  import UserPage from "./Pages/UserPage.jsx";
  import ErrorPage from "./pages/ErrorPage.jsx";

const root = document.getElementById("root");
//const { id } = useParams();
//mettre /:id pour le path /UserPage
//mettre <Provider store={store}> </BrowserRouter> </Provider> pour alimenter en data du store
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