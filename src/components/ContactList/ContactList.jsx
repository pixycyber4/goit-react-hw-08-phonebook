import React, { useEffect } from 'react';
import { ContactItem, Contacts, DeleteButton } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selector';
import { deleteContactThunk, fetchDataThunk } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Title } from 'components/App.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
  };

  const getFilteredContacts = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <ContactForm />
          <Title>Contacts</Title>
          <Contacts>
            {filteredContacts.map(({ id, name, number }) => (
              <ContactItem key={id}>
                {name}: {number}
                <DeleteButton onClick={() => handleDelete(id)}>
                  Delete
                </DeleteButton>
              </ContactItem>
            ))}
          </Contacts>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};
