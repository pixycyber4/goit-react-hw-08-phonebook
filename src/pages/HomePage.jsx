import { Title } from 'components/App.styled';
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <Title>
        <Link to="/login">LogIn</Link> or <Link to="/register">Register</Link>{' '}
        to see Phonebook
      </Title>
    </div>
  );
}

export default HomePage;
