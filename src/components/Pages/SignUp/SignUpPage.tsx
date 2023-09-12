import React, { useEffect, useState } from 'react';

import classes from './SignUpPage.module.scss';
import CreateNewAccForm from '../../CreateNewAccForm';

export default function SignUpPage() {

  return (
    <div className={classes.SignUpPage}>
      <CreateNewAccForm />
    </div>
  );
}
