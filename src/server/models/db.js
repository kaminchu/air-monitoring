// @flow
import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "database", "", "", {
    dialect: "sqlite",
    storage:"./data.sqlite3",
  }
);

export default sequelize;