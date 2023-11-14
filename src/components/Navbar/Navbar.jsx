import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from 'redux/auth/operations';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/auth/selectors';
import styled from 'styled-components';

export const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const name = useSelector(selectUser);
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);

  if (isRefresh) {
    return <Loader />;
  }

  return (
    <StyledHeader>
      <StyledWrapper>
        {!isLoggedIn ? <StyledLink to="/">Home</StyledLink> : ''}
        {isLoggedIn ? <StyledLink to="contacts">Phonebook</StyledLink> : ''}
      </StyledWrapper>
      {!isLoggedIn ? (
        <div>
          <StyledLink to="/login">LogIn</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
        </div>
      ) : (
        <StyledWrapper>
          <span>{name}</span>|
          <StyledButton onClick={() => dispatch(logoutThunk())}>
            LogOut
          </StyledButton>
        </StyledWrapper>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  gap: 24px;
  color: rgba(103, 15, 186, 0.715);

  border-bottom: 1px solid;
  border-color: rgba(137, 43, 226, 0.715);
  background-color: rgba(189, 145, 231, 0.715);
  box-shadow: 0px 7px 17px -2px rgba(112, 19, 122, 0.75);
  -webkit-box-shadow: 0px 7px 17px -2px rgba(112, 19, 122, 0.75);
  -moz-box-shadow: 0px 7px 17px -2px rgba(112, 19, 122, 0.75);
`;

export const StyledLink = styled(NavLink)`
  align-items: center;
  gap: 10px;
  padding: 5px;
  border-radius: 4px;
  text-decoration: none;
  color: black;

  &.active {
    background-color: rgba(80, 36, 120, 0.715);
    color: white;
  }
  &:hover:not(.active) {
    background-color: rgba(168, 136, 198, 0.715);
  }
`;

export const StyledButton = styled.button`
  align-items: center;
  gap: 10px;
  padding: 5px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background-color: rgba(168, 136, 198, 0.715);

  &:focus {
    background-color: rgba(80, 36, 120, 0.715);
    color: white;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
