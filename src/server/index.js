// @flow
import express from "express";
import routes from "./routes";

import "./interval";

const app = express();
app.use("/", routes);

app.listen(process.env.PORT || 3000, () => console.log("Listening to port 3000"));
