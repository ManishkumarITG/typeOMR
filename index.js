const express = require("express");
const PORT = 3000;
const app = express();
const {  getOneUser ,addUser , updateUser, deleteUser, getAllUsers, addClient } = require("./src/controller/Api.controller");


app.use(express.json())


//Get all users  
app.get("/get-all-user", getAllUsers);

// Get one user
app.get("/get-one-user", getOneUser);

// Add specific user 
app.post("/adduser", addUser);
app.post("/add-client-project", addClient);

//Update users
app.put("/updateuser" , updateUser);

//Delete user
app.delete("/deleteuser" , deleteUser);

// Type Omr 



app.listen(PORT, () => {
    console.log(`ruunning... http://localhost:${PORT}`);
});