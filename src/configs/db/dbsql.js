require("reflect-metadata")
const { DataSource }= require("typeorm");
const { ClientInfo } = require("../../models/client");
const { ProjectInfo } = require("../../models/projects");

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "manish_7771",
  database: "clients",
  synchronize: true,   
  logging: true,
  entities: [ClientInfo, ProjectInfo],
});


module.exports = {AppDataSource}