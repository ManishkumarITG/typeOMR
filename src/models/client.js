const { EntitySchema } = require("typeorm")


const ClientInfo = new EntitySchema({
  name: "Client",
  tableName: 
  "clients",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
    email: {
      type: "varchar",
    },
  },
  relations: {
    projects: {
      type: "one-to-many",
      target: "ProjectInfo",
      inverseSide: "client", 
      cascade: true,
    },
  },
});
module.exports = { ClientInfo };