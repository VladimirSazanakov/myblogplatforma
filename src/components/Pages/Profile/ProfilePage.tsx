import React from 'react';
import classes from './ProfilePage.module.scss';
import ProfileForm from '../../ProfileForm';

export default function ProfilePage() {

  return (
    <div className={classes.SignUpPage}>
      <ProfileForm />
    </div>
  );
}
