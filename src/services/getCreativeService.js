import { API_BASE_ADS } from "./consts";
import moment from "moment";

export default class {
  constructor() {
    this._apiBase = API_BASE_ADS;
  }

  getCreative = async (appid) => {
    let nowDate = moment().format("YYYY-MM-DD HH:mm:ss");
    try {
      const res = await fetch(`${this._apiBase}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          action: "getmessage",
          adchannel: "htmlad",
          adid: "",
          androidid: "",
          androidsdk: 1,
          appid: parseInt(appid, 10),
          appkey: "",
          appstate: "foreground",
          carrier: "25000",
          connectiontype: "WIFI",
          googleplaysdk: false,
          iconsize: 64,
          imei: "65FB3D342B39A5F146BA94930F5FFE6F", //TODO ?????????
          imeisource: "SERIAL",
          imsi: "",
          installerpackagname: "",
          latitude: 0,
          limitadtrackingenabled: false,
          locale: "ru",
          longitude: 0,
          manufacturer: "specific",
          networkoperator: "25000",
          nscvalue: false,
          osversion: "",
          packagename: "",
          permissions: 100,
          phonemodel: "specific",
          phonetype: "WIFI",
          playservicestatus: "",
          referrer: "",
          screenalignment: 0,
          screenheight: 480,
          screenwidth: 320,
          timeofclick: new Date("0"),
          timeofreboot: new Date("0"),
          timestamp: nowDate,
          useragent: window.navigator.userAgent,
          version: 1,
          wake: true
        })
      });
      return await res.json();
    } catch (err) {
      console.log(err);
      return { err };
    }
  };
}
