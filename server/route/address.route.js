const route = require("express").Router()
const addressController = require("../controller/address.controller")


route.get("/user/:id", addressController.getAddress )
// route.get("/", addressController.getAllAddress);
route.get("/:id", addressController.getAnAddress )
route.put("/:id", addressController.putAddress)
module.exports = route