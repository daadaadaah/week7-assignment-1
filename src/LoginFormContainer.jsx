import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import { requestLogin, changeLoginField } from './actions';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value })); // TODO : 상태가 필요하네? -> Redux로 가자!
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  return (
    <LoginForm
      fields={{ email, password }}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />

  );
}
