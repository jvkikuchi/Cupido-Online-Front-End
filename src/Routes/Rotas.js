import React from "react";
import { Route, Routes} from "react-router-dom";
import {Home} from "../Pages/Home/Home";
import {NotFound} from "../Pages/NotFound/NotFound";
import {Login} from "../Pages/Login/Login";
import {Signup} from "../Pages/Signgup/Signup";
import {NewMessage} from "../Pages/NewMessage/NewMessage";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import UnauthenticatedRoute from "../components/PrivateRoute";

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path ="*" element={<NotFound />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>     
      <Route path="/messages/new" element={
        <UnauthenticatedRoute>
          <NewMessage />
        </UnauthenticatedRoute>
      }/>
      <Route path="/login/reset" element={<ResetPassword />} />
    </Routes>
  );
}