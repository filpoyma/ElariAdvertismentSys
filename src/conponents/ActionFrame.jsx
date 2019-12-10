import React, { Component } from "react";
import Iframe from "react-iframe";

const blackScr = {
  width: `${window.screen.width + 1}px`,
  height: `${window.screen.height}px`,
  backgroundColor: "black"
};

export class ActionFrame extends Component {
  state = {
    innerHeight: `${window.innerHeight - 1}px`,
    innerWidth: `${window.innerWidth - 1}px`
  };

  setSizeHandle = () => {
    this.setState({ innerHeight: `${window.innerHeight - 1}px` });
    this.setState({ innerWidth: `${window.innerWidth - 1}px` });
  };

  componentDidMount() {
    window.addEventListener("resize", () => this.setSizeHandle());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => this.setSizeHandle());
  }

  render() {
    if (this.props.isSleep) return <div style={blackScr} />;
    else
      return (
        <Iframe
          url={this.props.path}
          width={this.state.innerWidth}
          height={this.state.innerHeight}
          id="myId"
          className="myClassname"
          display="initial"
          frameBorder="0"
        />
      );
  }
}

export default ActionFrame;
