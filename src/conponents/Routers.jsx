import React from "react";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
//import PopUp from './PopUp';
//import GetCreativeIntervalService from './GetCreativeIntervalService';

//const URLCREATIVE = 'https://elari.net/ru-elari-kidphone-3g-%D0%B8-elari-nanopods-sport-%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BE%D0%B1%D0%B7%D0%BE%D1%80-%D0%BD%D0%B0-%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%B5-wylsacom/'

const Main = () => (
  <main style={style}>
    <Switch>
      <Route exact path="/" component={Home} />
      {/*<Route path="/nav1"*/}
      {/*render={ props => <PopUp {...props} path={URLCREATIVE}/>} />*/}
      {/*<Route path="/nav2" component={GetCreativeIntervalService} />*/}
    </Switch>
  </main>
);

const style = {
  marginTop: "20px"
};

export default Main;
