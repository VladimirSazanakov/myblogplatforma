import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import classes from './LoginForm.module.scss';

type LayoutType = Parameters<typeof Form>[0]['layout'];

type Inputs = {
  email: string
  password: string
}

export default function LoginForm(props: any) {
  const formTitle = 'SignIn';

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('vertical');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const { register, handleSubmit, watch, formState: { errors }, } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => { console.log(data) };

  const formItemLayout =
    formLayout === 'horizontal'
      ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } }
      : null;

  const buttonItemLayout =
    formLayout === 'horizontal'
      ? { wrapperCol: { span: 14, offset: 4 } }
      : null;

  // function handleSubmit() {}

  return (
    <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.formTitle}>{formTitle}</div>
      <div className={classes.formItem}>
        <div className={classes.ItemConteiner}>
          <label className={classes.formLabel}>Email address</label>
          <input
            className={classes.formInput}
            // type="email"
            // required
            // name="email"
            placeholder="Email address"
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /\S+@\S+.\S+/,
                message: "Please enter correct value"
              }

            })}
            aria-invalid={errors.email ? true : false}
          ></input>
          <span className={classes.errorMessage}>{errors.email?.message}</span>
          {/* {errors.email && <span className={classes.errorMessage}>Email addres is required</span>} */}
        </div>

        <div className={classes.ItemConteiner}>

          <label className={classes.formLabel}>Password</label>
          <input
            type="password"
            // required
            className={classes.formInput}
            // name="password"
            placeholder="Password"
            {...register('password', {
              required: "Password is requires",
              minLength: {
                value: 6,
                message: 'Your password needs to be at least 6 characters'
              },
              maxLength: {
                value: 40,
                message: 'Your password must be 40 characters or less'
              }
            })}
            aria-invalid={errors.password ? true : false}

          ></input>
          <span className={classes.errorMessage}>{errors.password?.message}</span>
          {/* {errors.password && <span className={classes.errorMessage}>This field is reqired</span>} */}
        </div>
      </div>
      <div className={classes.formItem}>
        <button
          type="submit"
          className={classes.formSubmitBtn}
        >
          Login
        </button>
        <div className={classes.formInfo}>
          Don't have account?{' '}
          <Link className={classes.link} to="/sign-up">
            Sign Up.
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
