// @flow
import express from "express";
import Atmospheric from "./models/atmospheric";
import {loadSensor} from "./sensor";


const app = express();
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(process.env.PORT || 3000, () => console.log("Listening to port 3000"));

// センサー情報を取りつづける
Atmospheric.sync();
const ms = 10 * 1000;// 10秒ごと
setInterval(async () => {
  const data = await loadSensor();
  Atmospheric.create(data);
}, ms);
