// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AddProduct from "./admin/component/AddProduct";
import Page404 from "./components/pages/404";
import CardPage from "./components/component/CardPage/CardPage";
import DelitProduct from "./admin/component/DelitProduct";
import RanemeProduct from "./admin/component/RanemeProduct";
import SiginUp from "./components/component/SiginUp/SiginUp";
import { useAuthContext } from "./components/context/AuthContext";
import "./App.css";
import Login from "./components/component/Login/Login";
import ForgotPassword from "./components/pages/ForgotPassword";
import VerifyCode from "./components/pages/VerifyCode";
function App() {
  const { isAdmin } = useAuthContext();
  console.log("admin");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {isAdmin ? (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/card/:id" element={<CardPage />} />
              <Route
                path="/dashboard/DeleteProduct"
                element={<DelitProduct />}
              />
              <Route
                path="/dashboard/RenameProduct"
                element={<RanemeProduct />}
              />
              <Route path="/dashboard/addProduct" element={<AddProduct />} />
              <Route path="*" element={<Page404 />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SiginUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/verify-code" element={<VerifyCode />} />

            </>
          ) : (
            <>
              <Route path="/" exact element={<HomePage />} />
              <Route path="*" element={<Page404 />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SiginUp />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
