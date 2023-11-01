import React, { Suspense } from 'react';
import css from './App.module.css';


import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

export const App = () => {

  return (
    <div className={css.container}>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};
