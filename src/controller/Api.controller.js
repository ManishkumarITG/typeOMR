const express = require("express");
const db = require("../configs/db/dbsql");
const defaultErrorHandle = require("../../utils/utils");
const { Client, ClientInfo } = require("../models/client");
require("../configs/db/dbsql");

db.AppDataSource.initialize()
    .then(() => {
        console.log("database connected");
    })

const clientRepo = db.AppDataSource.getRepository(ClientInfo)


const getAllUsers = async (req, res) => {
    try {
        // const student = studentRepo.create(req.body)
        const result = await clientRepo.find()
        res.json({ data: result })
    } catch (error) {
        return res.json({
            status: "something is wrong",
            res: error
        })
    }
}

const getOneUser = async (req, res) => {
    try {
        const result = await clientRepo.findOne({where: {id : Number(req.body.id)}})
        res.json({ data: result })
    } catch (error) {
        return res.json({
            status: "something is wrong",
            res: error
        })
    }
}

const addUser = async (req, res) => {
    try {
        const clieant = clientRepo.create(req.body)
        const result = await clientRepo.save(clieant)
        res.json({
            data: result,
            success: true
        })
    } catch (error) {
        return res.json({
            status: "something is wrong",
            res: error
        })
    }
}



const updateUser = async (req, res) => {
    try {
        const client = await clientRepo.update({ id: req.body.id },
            { name: req.body.name, rigion: req.body.rigion })
        return res.json({
            status: "success",
            res: client
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: "something is wrong",
            res: error
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const client = await clientRepo.delete({ id: req.body.id })
        return res.json({
            status: "success",
            res: client
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: "something is wrong",
            res: error
        })
    }
}


const addClient = async (req , res)=>{
    try {
        const clientRepo = db.AppDataSource.getRepository(ClientInfo);
        const client = clientRepo.create({
            name: req.body.name,
            email: req.body.email,
            projects: req.body.projects
        });
        const result = await clientRepo.save(client);
        res.json({
            data: result
        });
    } catch (error) {
        console.log(error);
        res.json({status:"something went wrong" , "err": error});
    };
};


// module.exports = { getUsers, addUser ,updateUser };

// module.exports = addUser;
module.exports = { getAllUsers, addUser, updateUser, deleteUser , getOneUser , addClient}