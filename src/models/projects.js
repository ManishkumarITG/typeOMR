const { EntitySchema } = require("typeorm");

const ProjectInfo = new EntitySchema({
    name: "projectType",
    tableName: "projectType",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        title: {
            type: "varchar",
        }
    },
    relations: {
        clientbasedata: {
            target: "ClientInfo",
            type: "one-to-many",
            inverseSide: "stream",
        }
    }
})

module.exports = {ProjectInfo}