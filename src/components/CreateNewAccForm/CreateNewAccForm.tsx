import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useRegisterNewUserMutation } from '../Api/RtkQuery';

import classes from './CreateNewAccForm.module.scss';

type Inputs = {
  username: string
  email: string
  password: string
  repeatPassword: string
  agree: any
}

type userDataApi = {
  user: {
    username: string,
    email: string,
    password: string,
  }
}
export default function CreateNewAccForm(props: any) {
  const formTitle = 'Create new account';
  const [successed, setSuccessed] = useState(false);
  const [fetchCreateUser, { data, isLoading, isError }] = useRegisterNewUserMutation();
  const { register, handleSubmit, formState: { errors }, getValues, control, setError } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newUser: userDataApi = {
      user: {
        username: data.username,
        email: data.email,
        password: data.password,
      }
    }
    fetchNewUser(newUser);
  }

  const fetchNewUser = async (newUser: userDataApi) => {
    if (newUser) {
      try {
        await fetchCreateUser(newUser).unwrap();
        setSuccessed(true);
        setTimeout(() => navigate('/sign-in', { replace: true }), 2000);
      } catch (error: any) {
        showErrors(error.data);
      }
    }
  }

  const showErrors = (errData: any) => {
    const errItems = errData.errors;
    const errKeys = Object.keys(errItems);
    console.log(errKeys);
    errKeys.forEach((el: string, index: number) => {
      switch (el) {
        case 'username': {
          setError('username', { message: el + ' ' + errItems[el] });
          break;
        }
        case 'email': {
          setError('email', { message: el + ' ' + errItems[el] });
          break;
        }

        case 'password': {
          setError('password', { message: el + ' ' + errItems[el] });
          break;
        }
        default: break;
      }
    });
  }

  function repearPasswordValid(value: any) {
    const { password, repeatPassword } = getValues();
    if (password != value) {
      return 'Password must be match';
    }
  }

  return (
    <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.formTitle}>{formTitle}</div>

      <div className={classes.formItem}>

        <div className={classes.itemContainer}>
          <label className={classes.formLabel}>Username</label>
          <input
            type="text"
            className={classes.formInput}
            placeholder="Username"
            {...register('username', {
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Your Username needs to be at least 3 characters'
              },
              maxLength: {
                value: 20,
                message: "Your Username must be 20 characters or less"
              }
            })}
            aria-invalid={errors.username ? true : false}
          ></input>
          <span className={classes.errorMessage}>{errors.username?.message}</span>
        </div>

        <div className={classes.itemContainer}>
          <label className={classes.formLabel}>Email address</label>
          <input
            type="email"
            className={classes.formInput}
            placeholder="Email address"
            {...register('email', {
              required: 'Email address is required',
              pattern: {
                value: /\S+@\S+.\S+/,
                message: "Please enter correct value"
              }
            })}
            aria-invalid={errors.email ? true : false}
          ></input>
          <span className={classes.errorMessage}>{errors.email?.message}</span>
        </div>

        <div className={classes.itemContainer}>
          <label className={classes.formLabel}>Password</label>
          <input
            type="password"
            className={classes.formInput}
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: "Your password needs to be at least 6 characters"
              },
              maxLength: {
                value: 40,
                message: "Your password must be 40 characters or less"
              }
            })}
            aria-invalid={errors.password ? true : false}
          ></input>
          <span className={classes.errorMessage}>{errors.password?.message}</span>
        </div>

        <div className={classes.itemContainer}>
          <label className={classes.formLabel}>Repeat Password</label>
          <input
            type="Password"
            className={classes.formInput}
            placeholder="Password"
            {...register("repeatPassword", {
              required: "Please confurm password",
              validate: repearPasswordValid,
            })}
            aria-invalid={errors.repeatPassword ? true : false}
          ></input>
          <span className={classes.errorMessage}>{errors.repeatPassword?.message}</span>
        </div>
      </div>

      <div className={classes.formItem}>
        <div className={classes.formCheckContainer}>
          <Controller
            control={control}
            name='agree'
            rules={{ required: true }}
            render={({ field }) =>
              <Checkbox {...field}
                className={classes.formCheckBox}
              ></Checkbox>
            } />
          <span className={classes.formAgree}>I agree to the processing of my personal information</span>
        </div>
        <span className={classes.errorMessage}>{errors.agree ? 'You must accept' : null}</span>
      </div>
      {successed ? <span className={classes.successed}>successful</span> : null}
      <div className={classes.formItem}>
        <input
          value={'Create'}
          type="submit"
          className={classes.formSubmitBtn}
        />
        <div className={classes.formInfo}>
          Don't have account?{' '}
          <Link className={classes.link} to="/sign-in">
            Sign In.
          </Link>
        </div>
      </div>
    </form >
  );
}
