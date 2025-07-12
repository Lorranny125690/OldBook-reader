import * as React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from '../Screens/Auth/Login';
import Home from '../Screens/Home/Home';
import { Header } from '../components/Header';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
