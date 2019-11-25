import { API_BASE_LOG } from "./consts";

export default class {
  constructor() {
    this._apiBase = API_BASE_LOG;
  }

  getLog = async data => {
    try {
      await fetch(`${API_BASE_LOG}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({data})
      });
      return 'ok';
    } catch (err) {
      console.log('send log error ', err);
      return { err };
    }
  };
}
