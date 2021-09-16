import { useCallback, useRef, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import AppLayout from "components/layouts/AppLayout";
import useInput from "hooks/useInput";
import axios from "axios";
import { useEffect } from "react";
import Router from "next/router";
import api from "utils/api";

const ZButton = styled(Button)`
  background-color: rgb(228, 35, 76);
  border-color: rgb(228, 35, 76);
  font-weight: 500;
`;

const Signup = () => {
  const [email, handleEmail] = useInput<string>("");
  const [name, handleName] = useInput<string>("");
  const [password, handlePassword] = useInput<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = useCallback(async () => {
    //* 회원가입
    const data = { email, name, password };
    console.log(data);
    try {
      const response = await axios.post(api.cats, data, {
        withCredentials: true,
      });
      console.log(response.data);
      Router.replace("/");
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        alert(error.response.data.message);
      } else {
        alert(error.message);
      }
    }
  }, [email, password]);

  return (
    <>
      <Head>
        <title>C.I.C</title>
      </Head>
      <AppLayout isSignup={true}>
        <Form onFinish={handleSubmit}>
          <div>
            <label htmlFor="email">Cat Email</label>
            <br />
            <Input
              name="email"
              type="email"
              value={email}
              required
              onChange={handleEmail}
            />
          </div>
          <div>
            <label htmlFor="name">Cat Name</label>
            <br />
            <Input name="name" value={name} required onChange={handleName} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <Input
              name="password"
              type="password"
              value={password}
              required
              onChange={handlePassword}
            />
          </div>

          <div style={{ marginTop: 10 }}>
            <ZButton type="primary" htmlType="submit" loading={isLoading}>
              Sign up
            </ZButton>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
