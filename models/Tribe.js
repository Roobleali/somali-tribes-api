const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Tribe = sequelize.define(
  "Tribe",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    laamood: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    gobollada: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "qabiil",
  }
);

module.exports = Tribe;
