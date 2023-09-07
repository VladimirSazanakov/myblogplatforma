import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Radio } from 'antd';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import classes from './CreateNewAccForm.module.scss';
import { useRegisterNewUserMutation } from '../Api/RtkQuery';

type LayoutType = Parameters<typeof Form>[0]['layout'];

type Inputs = {
  username: string
  email: string
  password: string
  repeatPassword: string
  agree: any
}

export default function CreateNewAccForm(props: any) {
  const formTitle = 'Create new account';

  const [agree, setAgree] = useState(false);

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('vertical');

  const { } = useRegisterNewUserMutation();

  const { register, handleSubmit, formState: { errors }, getValues, control } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('From Submit', data)
  }

  function toogleAgree() {
    setAgree(!agree);
  }

  function onclickSubmit() {
    // console.log('value from oncklick FN', getValues());
    // const { password, repeatPassword } = getValues();
    // console.log(password);
    // console.log(repeatPassword);
    // if (password != repeatPassword) {
    //   console.log('password is not equele');
    //   setError('password', { type: 'value', message: 'Password must be match' });
    console.log(errors);
    // }
  }

  function repearPasswordValid(value: any) {
    // console.log('value FN');
    const { password, repeatPassword } = getValues();
    if (password != value) {
      // console.log('password is not equele In');
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
            // required
            className={classes.formInput}
            // name="username"
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
            // required
            className={classes.formInput}
            // name="email"
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
            // required
            className={classes.formInput}
            // name="password"
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
            // required
            className={classes.formInput}
            // name="repeatPassword"
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
              // checked={agree}
              // onChange={() => toogleAgree()}
              ></Checkbox>
            } />
          <span className={classes.formAgree}>I agree to the processing of my personal information</span>
        </div>
        <span className={classes.errorMessage}>{errors.agree ? 'You need confermed' : null}</span>
      </div>
      <div className={classes.formItem}>
        <input
          value={'Create'}
          type="submit"
          onClick={() => onclickSubmit()}
          className={classes.formSubmitBtn}
        // onClick={() => handleSubmit()}
        />
        {/* Create
        </input> */}
        <div className={classes.formInfo}>
          Don't have account?{' '}
          <Link className={classes.link} to="/sign-in">
            Sign In.
          </Link>
        </div>
      </div>
    </form >
    // <Form
    //     {...formItemLayout}
    //   layout='vertical'
    //   size="large"
    //   form={form}
    //   style={{ maxWidth: 600 }}
    // >
    //  <Form.Item label="Email sdress">
    //     <Input placeholder="Email adress" />
    //   </Form.Item>
    //   <Form.Item label="Password">
    //     <Input placeholder="Password" />
    //   </Form.Item>
    //   <Form.Item {...buttonItemLayout}>
    //     <Button type="primary">Login</Button>
    //   </Form.Item>
    // </Form>
  );
}
