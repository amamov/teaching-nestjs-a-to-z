import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Router from "next/router";
import { Layout, Button, Card, Image as AntdImage } from "antd";
import styled from "styled-components";
import { useAuth } from "utils/store";
import AccountForm from "./AccountForm";
import axios from "axios";
import api from "utils/api";

const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

const ZLayout = styled(Layout)`
  min-height: 100vh;
`;

const ZHeader = styled(Header)`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2.5rem;
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 390px) {
    font-size: 1.2rem;
  }
`;

const ZSider = styled(Sider)`
  text-align: center;
`;

const ZCard = styled(Card)`
  width: inherit;
`;

const XLoading = styled.div`
  color: white;
  font-size: 1.3rem;
  font-weight: 700;
`;

const ZFooter = styled(Footer)`
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
  @media only screen and (max-width: 390px) {
    display: none;
  }
`;

const ZButton = styled(Button)`
  background-color: rgb(228, 35, 76);
  border-color: rgb(228, 35, 76);
  color: rgb(0, 22, 40);
  font-weight: 500;
  @media only screen and (max-width: 390px) {
    position: relative;
    left: auto;
    bottom: auto;
    margin-top: 150px;
  }
  position: absolute;
  left: 30%;
  bottom: 30px;
`;

const XImageBox = styled.div`
  margin-top: 10px;
`;

type Props = {
  children: ReactNode;
  isSignup?: boolean;
};

const AppLayout = ({ children, isSignup = false }: Props): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [broken, setBroken] = useState<boolean>(false);
  const { me, login, logout } = useAuth(); //TODO
  const [isUpdated, setIsUpdated] = useState<boolean>(true);
  const [trigger, setTrigger] = useState<boolean>(false);
  const imageInput = useRef<HTMLInputElement>();

  const handleLogOutClink = useCallback(async () => {
    logout();
  }, []);

  useEffect(() => {
    if (me && isSignup) {
      Router.replace("/");
    }
  }, []);

  useEffect(() => {
    setIsUpdated(true);
  }, [trigger]);

  const handleCollapse = useCallback(
    (collapsed: boolean, type: any) => {
      setCollapsed(collapsed);
    },
    [collapsed]
  );

  const handleBroken = useCallback(
    (broken: boolean) => {
      setBroken(broken);
    },
    [broken]
  );

  const handleImgChange = useCallback(
    async (event) => {
      //* 이미지 추가
      const files = event.target.files;
      const form = new FormData();
      Array.from(files).forEach((file: Blob) => {
        form.append("image", file);
      });
      console.log(form.getAll("image"));
      try {
        setIsUpdated(false);
        const newCatResponse = await axios.post(`${api.cats}/upload`, form, {
          withCredentials: true,
          headers: {
            Authorization: "Bearer " + me.token,
          },
        });
        console.log(newCatResponse);
        login({ ...newCatResponse.data.data, token: me.token });
        setTrigger((preState) => !preState);
      } catch (error) {
        if (error.response) {
          console.log(error.response);
          alert(error.response.data.message);
        } else {
          alert(error.message);
        }
      }
    },
    [me, isUpdated, trigger]
  );

  const handleImgUpload = useCallback(() => {
    if (imageInput.current !== undefined) {
      imageInput.current.click();
    }
  }, [imageInput.current]);

  return (
    <>
      <ZLayout>
        {me && (
          <ZSider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={handleBroken}
            onCollapse={handleCollapse}
          >
            <ZCard hoverable cover={<AntdImage alt="cat" src={me.imgUrl} />}>
              <Meta title={me.email} description={me.name} />
            </ZCard>
            <XImageBox>
              <input
                type="file"
                name="image"
                multiple
                hidden
                ref={imageInput}
                onChange={handleImgChange}
              />
              {!isUpdated && <XLoading>이미지 변경중...</XLoading>}
              <Button onClick={handleImgUpload}>Image Update</Button>
            </XImageBox>
            <ZButton type="primary" size={"large"} onClick={handleLogOutClink}>
              Logout
            </ZButton>
          </ZSider>
        )}
        <Layout>
          <ZHeader
            style={{
              display:
                collapsed || !me
                  ? "flex"
                  : !collapsed && broken
                  ? "none"
                  : "flex",
            }}
          >
            <Image width={43} height={"auto"} src="/nestjs.svg" />
            <span style={{ marginLeft: 10 }}>Cat Information Community</span>
          </ZHeader>

          <Content style={{ margin: "45px 16px 0" }}>
            {me ? (
              <>{children}</>
            ) : isSignup ? (
              <>{children}</>
            ) : (
              <AccountForm />
            )}
          </Content>
          <ZFooter>C.I.C ©2021 Created by Yoon Sang Seok</ZFooter>
        </Layout>
      </ZLayout>
    </>
  );
};

export default AppLayout;
