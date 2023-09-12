import React, { useEffect, useState } from 'react';

import CreateNewAccForm from '../../CreateNewAccForm';

import classes from './SignUpPage.module.scss';

export default function SignUpPage() {
  return (
    <div className={classes.SignUpPage}>
      <CreateNewAccForm />
    </div>
  );
}
