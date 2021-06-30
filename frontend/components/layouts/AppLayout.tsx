import { ReactNode, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Router from "next/router";
import { Layout, Button, Card, Image as AntdImage } from "antd";
import styled from "styled-components";
import { useAuth } from "utils/store";
import AccountForm from "./AccountForm";

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

type Props = {
  children: ReactNode;
  isSignup?: boolean;
};

const AppLayout = ({ children, isSignup = false }: Props): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [broken, setBroken] = useState<boolean>(false);
  const { me, login, logout } = useAuth(); //TODO

  const handleLogOutClink = useCallback(async () => {
    logout();
  }, []);

  useEffect(() => {
    if (me && isSignup) {
      Router.replace("/");
    }
  }, []);

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
            <ZCard
              hoverable
              cover={
                <AntdImage
                  alt="cat"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" //TODO
                />
              }
            >
              <Meta
                title="Europe Street beat" //TODO
                description="www.instagram.com" //TODO
              />
            </ZCard>
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
