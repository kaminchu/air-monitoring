// @flow
import express from "express";
const router = express.Router();

import Atmospheric from "../../models/atmospheric";
import Sequelize from "sequelize";

const Op = Sequelize.Op;

router.get("/", async (req, res) => {
  const {start, end} = req.query;
  const json = await (() => {
    const attributes = ["temperature", "humidity", "pressure", "time"];
    if(!start && !end) {
      return Atmospheric.findAll({
        attributes,
      });
    } else if (start && end) {
      return Atmospheric.findAll({
        attributes,
        where: {
          time: {
            [Op.gte]: +start,
            [Op.lte]: +end,
          }
        }
      });
    } else if (start) {
      return Atmospheric.findAll({
        attributes,
        where: {
          time: {
            [Op.gte]: +start,
          }
        }
      });
    } else {
      return Atmospheric.findAll({
        attributes,
        where: {
          time: {
            [Op.lte]: +end,
          }
        }
      });
    }
  })();
  res.json(json);
});

export default router;
