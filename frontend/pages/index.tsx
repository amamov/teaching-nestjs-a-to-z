import AppLayout from "components/layouts/AppLayout";
import { Card } from "antd";
import { Menu, Input, Row, Col, Button } from "antd";
import styled from "styled-components";
import CatCard from "components/feature/index/CatCard";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import api from "utils/api";

const { Meta } = Card;

const XCatList = styled.div``;

function Home() {
  const [cats, setCats] = useState([]);

  const getCats = async () => {
    const response = await axios.get(`${api.cats}/all`, {
      withCredentials: true,
    });
    console.log(response.data.data);
    setCats(response.data.data);
  };

  useEffect(() => {
    getCats();
  }, []);

  return (
    <AppLayout>
      <XCatList>
        <Row gutter={10}>
          {cats.map((cat) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </Row>
      </XCatList>
    </AppLayout>
  );
}

export default Home;
