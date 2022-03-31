import { Model, DataTypes, Optional, CreationOptional } from "sequelize";
import sequelize from "loaders/sequelize";

type StaffAttributes = {
  id: number;
  name: string;
  age: number;
  email: string;
};

type StaffCreationAttributes = Optional<StaffAttributes, "id">;

class Staff extends Model<StaffAttributes, StaffCreationAttributes> {
  declare id: number;
  declare name: string;
  declare age: number;
  declare email: string;

  // Time Stamps
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Staff.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 0,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, tableName: "staffs" }
);

export type { StaffAttributes };
export default Staff;
