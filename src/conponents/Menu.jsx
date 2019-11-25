import { Menu, Icon, Avatar } from "antd";
import React from "react";
import { Link } from "react-router-dom";

//const { SubMenu } = Menu;

export default class MenuApp extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e.key);
    if (e.key === "button") return;
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="woman" />
          NavOne
          <Link to="#" />
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="man" />
          NavTwo
          <Link to="#" />
        </Menu.Item>
        {/*<SubMenu*/}
        {/*title={*/}
        {/*<span className="submenu-title-wrapper">*/}
        {/*<Icon type="setting" />*/}
        {/*NavThree - Submenu*/}
        {/*</span>*/}
        {/*}*/}
        {/*>*/}
        {/*<Menu.ItemGroup title="Item 1">*/}
        {/*<Menu.Item key="setting:1">Option 1</Menu.Item>*/}
        {/*<Menu.Item key="setting:2">Option 2</Menu.Item>*/}
        {/*</Menu.ItemGroup>*/}
        {/*<Menu.ItemGroup title="Item 2">*/}
        {/*<Menu.Item key="setting:3">Option 3</Menu.Item>*/}
        {/*<Menu.Item key="setting:4">Option 4</Menu.Item>*/}
        {/*</Menu.ItemGroup>*/}
        {/*</SubMenu>*/}
        {/*<Menu.Item key="alipay">*/}
        {/*<a*/}
        {/*href="https://ant.design"*/}
        {/*target="_blank"*/}
        {/*rel="noopener noreferrer"*/}
        {/*>*/}
        {/*Navigation Four - Link*/}
        {/*</a>*/}
        {/*</Menu.Item>*/}
        {/*<Menu.Item key="button">*/}
        {/*<Button*/}
        {/*ghost*/}
        {/*size="small"*/}
        {/*className="header-lang-button"*/}
        {/*//onClick={this.handleLangChange}*/}
        {/*key="lang-button"*/}
        {/*>Start</Button>*/}
        {/*</Menu.Item>*/}

        {/*<Menu.Item key="button">*/}
        {/*<Input placeholder="is ok?" style={{ marginRight: 10 }} />*/}
        {/*<Button>OK</Button>*/}
        {/*</Menu.Item>*/}
        <Menu.Item style={{ float: "right" }}>
          <Avatar style={{ backgroundColor: "#298ad0" }}>Elari</Avatar>
        </Menu.Item>
      </Menu>
    );
  }
}
