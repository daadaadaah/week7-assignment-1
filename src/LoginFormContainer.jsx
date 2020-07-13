import React from 'react';

import { useDispatch } from 'react-redux';

import { requestLogin } from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(requestLogin()); // TODO : 상태가 필요하네? -> Redux로 가자!
  }

  return (
    <>
      <div>
        <label htmlFor="login-email">E-mail</label>
        <input type="email" id="login-email" />
      </div>
      <div>
        <label htmlFor="login-password">Password</label>
        <input type="password" id="login-password" />
      </div>
      <button
        type="button"
        onClick={handleClick}
      >
        Log In
      </button>
    </>

  );
}
