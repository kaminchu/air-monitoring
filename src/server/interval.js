// @flow
import Atmospheric from "./models/atmospheric";
import {loadSensor} from "./sensor";

// センサー情報を取りつづける
Atmospheric.sync();
const ms = 10 * 1000;// 10秒ごと
setInterval(async () => {
  const data = await loadSensor();
  Atmospheric.create(data);
}, ms);
