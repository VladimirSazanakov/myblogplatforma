import React from 'react';

import ProfileForm from '../../ProfileForm';

import classes from './ProfilePage.module.scss';

export default function ProfilePage() {
  return (
    <div className={classes.SignUpPage}>
      <ProfileForm />
    </div>
  );
}
