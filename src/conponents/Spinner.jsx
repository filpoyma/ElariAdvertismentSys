import React from "react";
import ClipLoader from "react-spinners/CircleLoader";
import { css } from "@emotion/core";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default class extends React.Component {
  render() {
    return (
      <div className="sweet-loading">
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={50}
          color={"#1e61bc"}
          loading={this.props.loading}
        />
      </div>
    );
  }
}
