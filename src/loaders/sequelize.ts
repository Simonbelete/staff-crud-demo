import { Sequelize } from "sequelize";

// const sequelize = new Sequelize({
//   dialect: "mysql",
//   host: `${process.env.MYSQL_HOST || "127.0.0.1"}:${
//     process.env.MYSQL_PORT || "3306"
//   }`,
//   username: process.env.MYSQL_USER || "root",
//   database: process.env.MYSQL_DATABASE || "staff_crud_demo_db",
//   password: process.env.MYSQL_PASSWORD || "123456789",
// });

const sequelize = new Sequelize(
  process.env.MYSQL_URL ||
    "mysql://root:123456789@127.0.0.1:3306/staff_crud_demo_db"
);

export default sequelize;
