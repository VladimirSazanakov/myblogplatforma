import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import { Link } from 'react-router-dom';

import classes from './LoginForm.module.scss';

type LayoutType = Parameters<typeof Form>[0]['layout'];

export default function LoginForm(props: any) {
  const formTitle = 'SignIn';

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('vertical');

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

  function handleSubmit() {}

  return (
    <form className={classes.Form}>
      <div className={classes.formTitle}>{formTitle}</div>
      <div className={classes.formItem}>
        <label className={classes.formLabel}>Email address</label>
        <input
          type="email"
          required
          className={classes.formInput}
          name="email"
          placeholder="Email address"
        ></input>

        <label className={classes.formLabel}>Password</label>
        <input
          type="password"
          required
          className={classes.formInput}
          name="password"
          placeholder="Password"
        ></input>
      </div>
      <div className={classes.formItem}>
        <button
          type="submit"
          className={classes.formSubmitBtn}
          onClick={() => handleSubmit()}
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
