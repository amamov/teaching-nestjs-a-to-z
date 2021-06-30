import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import useInput from "hooks/useInput";
import { useAuth } from "utils/store";

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
    console.log(email, password);
    // axios.post('login')
    login({ id: "asldjlkjas", email: email, name: "uieuiwqh" });
  }, [email, password]);

  useEffect(() => {}, []);

  return (
    <FormWrapper onFinish={handleSubmit}>
      <div>
        <label htmlFor="user_email">Cat Email</label>
        <br />
        <Input
          name="user_email"
          value={email}
          onChange={handleEmail}
          required
        />
      </div>
      <div>
        <label htmlFor="user_password">Cat Password</label>
        <br />
        <Input
          name="user_password"
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
