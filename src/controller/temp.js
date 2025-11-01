const express = require("express");
const db = require("../configs/db/dbsql");
// const defaultErrorHandle = require("../../utils/utils");
const { Client } = require("../models/client");
require("../configs/db/dbsql");
// db.AppDataSource.initialize().then(console.log("init").catch((err)=>console.log("init",err)))
const addClient = async (req , res)=>{
    try {
        const clientRepo = db.AppDataSource.getRepository(Client);
        const client = clientRepo.create({
            name: req.body.name,
            email: req.body.email,
            projects: req.body.projects,
        })
        const result = await clientRepo.save(client)
        res.json({
            data: result
        })
    } catch (error) {
        console.log(error);
        res.json({status:"something went wrong"})
    }
}

module.exports = { getUsers, addUser ,updateUser };

// module.exports = addUser;
module.exports = { addClient }