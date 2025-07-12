import * as React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from '../Screens/Auth/Login';
import Home from '../Screens/Home/Home';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
