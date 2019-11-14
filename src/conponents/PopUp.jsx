import { Component } from "react";

const strWindowFeatures =
  "menubar=no,location=no,resizable=yes,status=no,scrollbars=yes width=640,height=480";

export class PopUp extends Component {
  componentWillUnmount() {
    this.externalWindow.close();
  }

  popOpen = () => {
    this.externalWindow = window.open(
      this.props.path,
      "id1001",
      strWindowFeatures
    );
  };

  render() {
    console.log("Rendering PopUp...");
    setTimeout(() => this.popOpen(), 500); // setTimeout для обмана браузера
    return null;
  }
}

export default PopUp;
