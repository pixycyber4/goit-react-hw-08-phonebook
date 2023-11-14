import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerThunk } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import styled from 'styled-components';

const Register = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  const submit = data => {
    console.log(data);
    dispatch(registerThunk(data));
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
          placeholder="Enter your name"
          {...register('name', { required: true, minLength: 2 })}
        />
        <StyledInput
          placeholder="Enter your e-mail"
          {...register('email', { required: true, minLength: 6 })}
        />
        <StyledInput
          type="password"
          placeholder="Enter your password"
          {...register('password', { required: true, minLength: 6 })}
        />
        <StyledButton>Register</StyledButton>
        <StyledSpan>
          Already have an account? <Link to="/login">Login!</Link>
        </StyledSpan>
      </StyledForm>
    </div>
  );
};

export default Register;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  gap: 24px;
`;

export const StyledInput = styled.input`
  padding: 8px 8px;
  width: 300px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 9px;
`;

export const StyledButton = styled.button`
  width: 100px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  padding: 10px 10px;
  border-radius: 12px;
  border-color: pink;
  background-color: lightpink;
  cursor: pointer;
`;

export const StyledSpan = styled.span`
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
`;

export const StyledTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
