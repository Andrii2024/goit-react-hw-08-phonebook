import { Layout } from 'components/Layout';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import { Home, Login, Main, NotFound, Register } from 'pages';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="main" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
