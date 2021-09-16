import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import useInput from "hooks/useInput";
import { useAuth } from "utils/store";
import axios from "axios";
import api from "utils/api";

const FormWrapper = styled(Form)`
  padding: 1rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 0.8rem;
`;

const ZButton = styled(Button)`
  background-color: rgb(228, 35, 76);
  border-color: rgb(228, 35, 76);
  font-weight: 500;
`;

const LoginForm = () => {
  const [email, handleEmail] = useInput<string>("");
  const [password, handlePassword] = useInput<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLogging, setIsLogging] = useState<boolean>(false);
  const { me, login, logout } = useAuth();

  const handleSubmit = useCallback(async () => {
    //* 로그인
    try {
      const response = await axios.post(
        `${api.cats}/login`,
        { email, password },
        { withCredentials: true }
      );
      console.log(response.data);
      const getReponse = await axios.get(`${api.cats}`, {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + response.data.data.token,
        },
      });

      login({ ...getReponse.data.data, token: response.data.data.token });
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
    <FormWrapper onFinish={handleSubmit}>
      <div>
        <label htmlFor="email">Cat Email</label>
        <br />
        <Input name="email" value={email} onChange={handleEmail} required />
      </div>
      <div>
        <label htmlFor="password">Cat Password</label>
        <br />
        <Input
          name="password"
          type="password"
          value={password}
          onChange={handlePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <ZButton type="primary" htmlType="submit" loading={isLogging}>
          Login
        </ZButton>
        <Link href="/signup">
          <a>
            <Button>Sign up</Button>
          </a>
        </Link>
      </ButtonWrapper>
      <div>
        <span>{message}</span>
      </div>
    </FormWrapper>
  );
};

export default LoginForm;
