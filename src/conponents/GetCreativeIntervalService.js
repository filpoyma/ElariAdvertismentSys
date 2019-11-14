import React, { Component } from "react";
import { connect } from "react-redux";
import { setCreariveThunk } from "../redux/actions";
import PopUp from "./PopUp";

class GetCreativeIntervalService extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "prev/current creativeid -",
      this.props.creativeid,
      nextProps.creativeid
    );
    const { loaded } = this.props;
    const isRendering = nextProps.creativeid !== this.props.creativeid;
    if (loaded && !isRendering) this.onHandleSetInterval();
    return isRendering; // не рендерить, если creativeid одинаковые
  }

  componentDidUpdate() {
    if (this.props.loaded) this.onHandleSetInterval();
  }

  componentDidMount() {
    const { id } = this.props;
    this.props.setCreative(id);
    this.timerId = setInterval(() => this.props.setCreative(id), 10000); //первый интервал запроса 10 сек
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  onHandleSetInterval = () => {
    const { expirytime, id } = this.props;
    if (expirytime !== undefined) {
      console.log("request interval -> %s ms", expirytime);
      clearInterval(this.timerId);
      this.timerId = setInterval(
        () => this.props.setCreative(id),
        parseInt(expirytime, 10) * 1000
      );
    }
  };

  render() {
    console.log("Render");
    return (
      <div>
        <PopUp path={this.props.creative.htmlformat} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    creative: state.creative,
    expirytime: state.creative.expirytime,
    creativeid: state.creative.creativeid,
    loaded: state.loaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCreative: id => dispatch(setCreariveThunk(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetCreativeIntervalService);
