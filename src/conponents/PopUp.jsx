import React, { Component } from "react";
import FullScreen from './FullScreen';

const strWindowFeatures =
  "menubar=no,location=no,resizable=yes,status=no,scrollbars=yes width=640,height=480";
const strWindowFeaturesFullScreen =
  "menubar=no,location=no,resizable=yes,status=no,scrollbars=yes width=4000,height=4000}";


//"width="+screen.availWidth+",height="+screen.availHeight+"


export class PopUp extends Component {
  componentWillUnmount() {
    this.externalWindow && this.externalWindow.close();
  }

  popOpen = () => {
    console.log("Rendering PopUp...");
    setTimeout(() => this.externalWindow = window.open(this.props.path, "creativeShow", strWindowFeatures), 500);
  };

  render() {
    return <>
      {(this.props.sleep) ? <FullScreen/> : this.popOpen()}
    </>
  }
}

export default PopUp;
