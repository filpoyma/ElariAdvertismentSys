import React from "react";
import { Layout, Row, Col } from "antd";
import Menu from "./conponents/Menu";
import "antd/dist/antd.css";
import Routers from "./conponents/Routers";
import SubmitForm from "./conponents/SubmitForm";
const { Content, Footer } = Layout;

function App() {
  console.log(window.innerHeight);
  return (
    <div>
      <Row>
        <Col span={20} offset={2}>
          <Menu />
          <Content style={{ padding: "30px 20px" }}>
            <Routers />
            <Row
              type="flex"
              justify="center"
              align="middle"
              style={{ height: window.innerHeight - 200 }}
            >
              <Col span={6}>
                <SubmitForm />
              </Col>
            </Row>
          </Content>
          <Footer
            style={{ textAlign: "center", padding: 8, background: "white" }}
          >
            Elari ©2019
          </Footer>
        </Col>
      </Row>
    </div>
  );
}

export default App;
