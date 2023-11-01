import React, { Suspense, lazy, useEffect } from 'react';
import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/authReducer';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

const appRouts = [
  { path: '/', element: <HomePage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/contacts', element: <ContactsPage /> },
];

export const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch]);
  return (
    <div className={css.container}>
      <Navigation/>
      <Suspense fallback="Loading...">
        <Routes>
          {appRouts.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};
