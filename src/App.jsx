import { ContactList } from 'components/ContactList/ContactList';

import { Route, Routes } from 'react-router-dom';
import NotFound from 'pages/NotFound/NotFound';
import Register from 'pages/Register';
import Login from 'pages/Login';
import { Layout } from 'components/Layout/Layout';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from 'pages/HomePage';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const refresh = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return refresh ? null : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={isLoggedIn ? <ContactList /> : <HomePage />} />
          <Route path="contacts" element={<ContactList />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
