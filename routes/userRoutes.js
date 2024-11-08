const {getUser,postUser,putUser,deleteUser} = require("../controller/userController")

const Route = require("express").Router()

Route.get("/",getUser)
Route.post("/",postUser)
Route.put("/:id",putUser)
Route.delete("/:id",deleteUser)

module.exports = Route