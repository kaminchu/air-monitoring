// @flow
import express from "express";
const router = express.Router();

import atomospherics from "./atomospherics";
router.use("/atomospherics", atomospherics);

export default router;

