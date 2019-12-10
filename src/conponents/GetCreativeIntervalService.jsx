import React, { Component } from "react";
import { connect } from "react-redux";
import { setCreariveThunk } from "../redux/actions";
import ActionFrame from "./ActionFrame";

class GetCreativeIntervalService extends Component {

  state = {
    isSleep: false
  };


  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "prev/current creativeid -",
      this.props.creativeid,
      nextProps.creativeid
    );
    const { loaded } = this.props;
    const isRendering = nextProps.creativeid !== this.props.creativeid;
    if (loaded && !isRendering) this.onHandleSetInterval();
    return isRendering; // не рендерить, если creativeid одинаковые (не рендерит, если return false)
  }

  componentDidUpdate() {
    if (this.props.loaded) this.onHandleSetInterval();
  }

  componentDidMount() {
    const { appid } = this.props;
    this.props.setCreative(appid);
    this.timerId = setInterval(() => this.props.setCreative(appid), 10000); //первый интервал запроса 10 сек
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  onHandleSetInterval = () => {
    const { expirytime, appid } = this.props;
    if (expirytime !== undefined) {
      console.log("request interval -> %s ms", expirytime);
      clearInterval(this.timerId);
      this.timerId = setInterval(
        () => this.props.setCreative(appid),
        parseInt(expirytime, 10) * 1000
      );
    }
  };

  render() {
    const {creativeid, sleepid} = this.props;
    const isSleep = (creativeid === sleepid);
    console.log('isSleep', isSleep);
    return (
      <div>
        <ActionFrame path={this.props.creative.htmlformat} isSleep={isSleep}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    creative: state.creative,
    expirytime: state.creative.expirytime,
    creativeid: state.creative.creativeid,
    loaded: state.loaded,
    sleepid: state.sleepid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCreative: appid => dispatch(setCreariveThunk(appid)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetCreativeIntervalService);
