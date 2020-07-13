import React from 'react';

import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

import { requestLogin } from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(requestLogin()); // TODO : 상태가 필요하네? -> Redux로 가자!
  }

  return (
    <LoginForm onSubmit={handleSubmit} />

  );
}
