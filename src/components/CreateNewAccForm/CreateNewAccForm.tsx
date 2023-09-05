import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Radio } from 'antd';
import { Link } from 'react-router-dom';

import classes from './CreateNewAccForm.module.scss';

type LayoutType = Parameters<typeof Form>[0]['layout'];

export default function CreateNewAccForm(props: any) {
  const formTitle = 'Create new account';

  const [agree, setAgree] = useState(false);

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

  function handleSubmit() { }
  function toogleAgree() {
    setAgree(!agree);
    console.log(agree);
  }

  return (
    <form className={classes.Form}>
      <div className={classes.formTitle}>{formTitle}</div>
      <div className={classes.formItem}>
        <label className={classes.formLabel}>Username</label>
        <input
          type="email"
          required
          className={classes.formInput}
          name="username"
          placeholder="Username"
        ></input>
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
        <button
          type="submit"
          className={classes.formSubmitBtn}
          onClick={() => handleSubmit()}
        >
          Create
        </button>
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
