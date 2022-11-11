const express = require("express")
const app = express()
const port = 3000;
const cors = require("cors")
app.use(cors());
const userRouter = require("./route/user.route")
const addressRoute = require("./route/address.route")
app.use("/api/user", userRouter)
app.use("/api/address",addressRoute);
app.listen(port,()=>{
    console.log("Listening at port" + port)
})