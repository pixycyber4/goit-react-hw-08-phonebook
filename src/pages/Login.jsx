import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { loginThunk } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';

import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledSpan,
  StyledTitle,
} from './Register';
import { toast } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  const submit = data => {
    dispatch(loginThunk(data));
  };

  if (isLoggedIn) {
    toast.success(`Welcome ${name}`);
    return <Navigate to="/contacts" />;
  }

  return (
    <div>
      <StyledTitle>Registration</StyledTitle>
      <StyledForm onSubmit={handleSubmit(submit)} action="">
        <StyledInput
          placeholder="Enter your e-mail"
          {...register('email', { required: true, minLength: 6 })}
        />
        <StyledInput
          type="password"
          placeholder="Enter your password"
          {...register('password', { required: true, minLength: 6 })}
        />
        <StyledButton>Login</StyledButton>
        <StyledSpan>
          Don't have an acount yet? <Link to="/register">Register!</Link>
        </StyledSpan>
      </StyledForm>
    </div>
  );
};

export default Login;
