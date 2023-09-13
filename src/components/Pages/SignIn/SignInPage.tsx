import React from 'react';

import LoginForm from '../../LoginForm';

import classes from './SignInPage.module.scss';

export default function SignInPage() {
  return (
    <div className={classes.SignInPage}>
      <LoginForm />
    </div>
  );
}
