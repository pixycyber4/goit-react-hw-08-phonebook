// import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';

// import { Title } from 'components/App.styled';
// import { useSelector } from 'react-redux';
// import { selectError, selectLoading } from 'redux/contacts/selector';
// import { Loader } from 'components/Loader/Loader';
// import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import Register from 'pages/Register';
import Login from 'pages/Login';
import { Layout } from 'components/Layout/Layout';

export const App = () => {
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<ContactList />} />
        {/* <Route path="/contacts" element={<ContactList />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />

        {/* <Route>
          <Title>Phonebook</Title>
          <ContactForm />
          <Title>Contacts</Title>
          <Filter />
          {error && <StyledError>{error}</StyledError>}
          {loading && <Loader />}
          <ContactList />
        </Route> */}
      </Routes>
    </div>
  );
};

// const StyledError = styled.h2`
//   display: flex;
//   justify-content: center;
//   color: #4d4dcd;
// `;
