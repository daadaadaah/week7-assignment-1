import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
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
  });
});
