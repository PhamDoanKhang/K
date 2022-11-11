const route = require("express").Router();
const userController = require("../controller/user.controller")
// GET ALL USER
route.get("/", userController.getAllUser)
route.get("/:id" , userController.getAllUserById)
module.exports = route;