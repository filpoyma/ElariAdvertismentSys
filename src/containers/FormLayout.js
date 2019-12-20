import React from "react";
import { Layout, Row, Col } from "antd";
import { connect } from "react-redux";
import Routers from "../conponents/Routers";
import "antd/dist/antd.css";
import GetCreativeIntervalService from "../conponents/GetCreativeIntervalService";
const { Content, Footer } = Layout;

function FormLayout(props) {
  if (!props.isSubscribe)
    return (
      <div>
        <Row>
          <Col span={20} offset={2}>
            {/*<Menu />*/}
            <Content style={{ padding: "30px 20px" }}>
              <Routers />
              <Row
                type="flex"
                justify="center"
                align="middle"
                style={{ height: window.innerHeight - 200 }}
              >
                <Col span={6}>
                  {props.children} {/*сюда прилетает форма*/}
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
  else
    return (
      <>
        {!props.loaded && (
          <div style={{ textAlign: "center" }}>{props.message}</div>
        )}
        <GetCreativeIntervalService appid={props.appid} />
      </>
    );
}

const mapStateToProps = state => {
  return {
    isSubscribe: state.isSubscribe,
    appid: state.appid,
    loaded: state.loaded,
    message: state.message
  };
};

export default connect(mapStateToProps)(FormLayout);
