import { Form, Icon, Input, Button } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
//import 'antd/dist/antd.css'
import "./submit-form.css";
import { loggedInAC } from "../redux/actions";
import FormLayout from "../containers/FormLayout";

class NormalLoginForm extends Component {
  state = {
    start: false,
    buttonName: "Lets Start",
    btnLoading: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //console.log("Received values of form: ", values);
        this.props.loggedIn(values);
      }
    });
  };

  // onClickStartBtn = () => {
  //   this.setState(state => ({ start: !state.start }));
  //   if (this.state.start) this.setState({ buttonName: "Lets Start" });
  //   else this.setState({ buttonName: "Stop" });
  //   //this.setState((state) => (state.start = !state.start))
  // };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { appid, isSubscribe, loading } = this.props;
    return (
      <FormLayout>
        {!isSubscribe && (
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("appid", {
                rules: [{ required: true, message: "Пожалуйста, введите app Id!" }]
              })(
                <Input
                  prefix={
                    <Icon type="key" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="appid"
                />
              )}
            </Form.Item>
            {/*<Form.Item>*/}
              {/*{getFieldDecorator("exitid", {*/}
                {/*rules: [{ required: true, message: "Пожалуйста, введите exit Id!" }]*/}
              {/*})(*/}
                {/*<Input*/}
                  {/*prefix={*/}
                    {/*<Icon type="key" style={{ color: "rgba(0,0,0,.25)" }} />*/}
                  {/*}*/}
                  {/*placeholder="exitid"*/}
                {/*/>*/}
              {/*)}*/}
            {/*</Form.Item>*/}
            <Form.Item>
              {getFieldDecorator("sleepid", {
                rules: [{ required: true, message: "Пожалуйста, введите sleep Id!" }]
              })(
                <Input
                  prefix={
                    <Icon type="key" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="sleepid"
                />
              )}
            </Form.Item>
            {/*<Form.Item>*/}
            {/*{getFieldDecorator('password', {*/}
            {/*rules: [{ required: true, message: 'Please input your Password!' }],*/}
            {/*})(*/}
            {/*<Input*/}
            {/*prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}*/}
            {/*type="password"*/}
            {/*placeholder="Password"*/}
            {/*/>,*/}
            {/*)}*/}
            {/*</Form.Item>*/}
            <Form.Item>
              {/*{getFieldDecorator('remember', {*/}
              {/*valuePropName: 'checked',*/}
              {/*initialValue: true,*/}
              {/*})(<Checkbox>Remember me</Checkbox>)}*/}
              {/*<a className="login-form-forgot" href="#">*/}
              {/*Forgot password*/}
              {/*</a>*/}
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Send ID
              </Button>
            </Form.Item>
          </Form>
        )}

        {/*{isSubscribe && !this.state.start && (*/}
          {/*<Button*/}
            {/*type="danger"*/}
            {/*className="login-form-button"*/}
            {/*loading={loading}*/}
            {/*onClick={this.onClickStartBtn}*/}
          {/*>*/}
            {/*{this.state.buttonName}*/}
          {/*</Button>*/}
        {/*)}*/}

        {/*<div>*/}
          {/*<p align="center">{this.props.message}</p>*/}
        {/*</div>*/}

      </FormLayout>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

const mapStateToProps = state => {
  return {
    isSubscribe: state.isSubscribe,
    appid: state.appid,
    loading: state.loading,
    message: state.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loggedIn: values => dispatch(loggedInAC(values))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedNormalLoginForm);
