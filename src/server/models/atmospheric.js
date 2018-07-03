// @flow
import Sequelize from "sequelize";
import sequelize from "./db";
const Atomospheric = sequelize.define("atomospheric", {
  temperature: Sequelize.INTEGER,
  humidity: Sequelize.INTEGER,
  pressure: Sequelize.INTEGER,
  time: Sequelize.DATE,
});
export default Atomospheric;