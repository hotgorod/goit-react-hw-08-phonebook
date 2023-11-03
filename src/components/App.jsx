import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/authReducer';
import { Container } from '@chakra-ui/react';
import RestrictedRoute from './RestrictedRoute';
import PrivatedRoute from './PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

const appRouts = [
  { path: '/', element: <HomePage /> },
  {
    path: '/register',
    element: (
      <RestrictedRoute redirectTo="/contacts">
        <RegisterPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <RestrictedRoute redirectTo="/contacts">
        <LoginPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/contacts',
    element: (
      <PrivatedRoute redirectTo='/login'>
        <ContactsPage />
      </PrivatedRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch]);
  return (
    <Container maxW="670px">
      <Navigation />
      <Suspense fallback="Loading...">
        <Routes>
          {appRouts.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </Container>
  );
};
