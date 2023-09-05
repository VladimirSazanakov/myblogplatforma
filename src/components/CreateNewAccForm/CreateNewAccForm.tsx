import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Radio } from 'antd';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import classes from './CreateNewAccForm.module.scss';
import { useRegisterNewUserMutation } from '../Api/RtkQuery';

type LayoutType = Parameters<typeof Form>[0]['layout'];

type Inputs = {
  username: string
  email: string
  password: string
}

export default function CreateNewAccForm(props: any) {
  const formTitle = 'Create new account';

  const [agree, setAgree] = useState(false);

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('vertical');

  const { } = useRegisterNewUserMutation();

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } }
      : null;

  const buttonItemLayout =
    formLayout === 'horizontal'
      ? { wrapperCol: { span: 14, offset: 4 } }
      : null;

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();


  const onSubmit: SubmitHandler<Inputs> = (data) => { console.log(data) }

  function toogleAgree() {
    setAgree(!agree);
    console.log(agree);
  }

  return (
    <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.formTitle}>{formTitle}</div>
      <div className={classes.formItem}>
        <label className={classes.formLabel}>Username</label>
        <input
          type="text"
          required
          className={classes.formInput}
          // name="username"
          placeholder="Username"
          {...register('username')}
        ></input>
        <label className={classes.formLabel}>Email address</label>
        <input
          type="email"
          required
          className={classes.formInput}
          // name="email"
          placeholder="Email address"
          {...register('email')}
        ></input>

        <label className={classes.formLabel}>Password</label>
        <input
          type="password"
          required
          className={classes.formInput}
          // name="password"
          placeholder="Password"
          {...register('password')}
        ></input>
        <label className={classes.formLabel}>Repeat Password</label>
        <input
          type="Password"
          required
          className={classes.formInput}
          name="repeatPassword"
          placeholder="Password"
        ></input>
      </div>
      <div className={classes.formItem}>
        <div className={classes.formCheckContainer}>

          <Checkbox
            className={classes.formCheckBox}
            checked={agree}
            onChange={() => toogleAgree()}
          ></Checkbox>
          <span className={classes.formAgree}>I agree to the processing of my personal information</span>
        </div>
      </div>
      <div className={classes.formItem}>
        <input
          value={'Create'}
          type="submit"
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
    </form>
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
