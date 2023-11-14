// import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';

import { Route, Routes } from 'react-router-dom';
import NotFound from 'pages/NotFound/NotFound';
import Register from 'pages/Register';
import Login from 'pages/Login';
import { Layout } from 'components/Layout/Layout';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import HomePage from 'pages/HomePage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactList />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
