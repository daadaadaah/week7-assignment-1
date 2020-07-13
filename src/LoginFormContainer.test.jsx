import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test',
        password: '1234',
      },

    }));
  });

  it('renders input controls', () => {
    const { getByLabelText } = render(
      <LoginFormContainer />,
    );

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('renders [Log In] button', () => {
    const { getByText } = render(
      <LoginFormContainer />,
    );

    fireEvent.click(getByText('Log In'));

    expect(dispatch).toBeCalled(); // cf. mockStore 쓰면, 쫌더 무엇이 dispatch 되는지 알 수 있다.
  });
});
