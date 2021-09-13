import React, { useState, useEffect } from "react";
import { Card, Avatar } from "antd";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import axios from "axios";

const { Meta } = Card;

const Cards = () => {
  const [data, setData] = useState([]);

  const getPost = async (params) => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      {data.map((ele) => (
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={ele.tittle}
            title={ele.Id}
            description={ele.body}
          />
        </Card>
      ))}
    </>
  );
};

export default Cards;
